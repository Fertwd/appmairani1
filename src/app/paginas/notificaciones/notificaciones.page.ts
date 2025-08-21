import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NotificacionService, NotificationData } from 'src/app/services/notificacion.service';

interface SendResult {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule, ReactiveFormsModule],
})
export class NotificacionesPage implements OnInit {

  notificationForm: FormGroup;
  isLoading = false;
  sendResult: SendResult | null = null;
  minDate: string;

  constructor(
    private formBuilder: FormBuilder,
    private notificacionService: NotificacionService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    // Establecer fecha mínima como ahora
    this.minDate = new Date().toISOString();
    
    // Crear formulario reactivo
    this.notificationForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      url: [''],
      sendDate: ['']
    });
  }

  ngOnInit() {
    // Inicializar OneSignal
    this.notificacionService.init();
  }

  async sendNotification() {
    if (this.notificationForm.valid) {
      this.isLoading = true;
      this.sendResult = null;

      const loading = await this.loadingController.create({
        message: 'Enviando notificación...',
        spinner: 'crescent'
      });
      await loading.present();

      try {
        const formData = this.notificationForm.value;
        const notificationData: NotificationData = {
          title: formData.title,
          message: formData.message,
          url: formData.url || undefined,
          sendDate: formData.sendDate || undefined
        };

        this.notificacionService.sendNotification(notificationData).subscribe({
          next: async (response) => {
            console.log('Notification sent successfully:', response);
            this.sendResult = {
              success: true,
              message: `Notificación enviada exitosamente. ID: ${response.id}`
            };
            
            // Mostrar toast de éxito
            const toast = await this.toastController.create({
              message: 'Notificación enviada correctamente',
              duration: 3000,
              color: 'success',
              position: 'top'
            });
            await toast.present();

            // Limpiar formulario
            this.notificationForm.reset();
          },
          error: async (error) => {
            console.error('Error sending notification:', error);
            this.sendResult = {
              success: false,
              message: `Error al enviar la notificación: ${error.error?.errors?.[0] || error.message}`
            };

            // Mostrar toast de error
            const toast = await this.toastController.create({
              message: 'Error al enviar la notificación',
              duration: 3000,
              color: 'danger',
              position: 'top'
            });
            await toast.present();
          }
        });
      } catch (error) {
        console.error('Unexpected error:', error);
        this.sendResult = {
          success: false,
          message: 'Error inesperado al enviar la notificación'
        };
      } finally {
        this.isLoading = false;
        await loading.dismiss();
      }
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.notificationForm.controls).forEach(key => {
        this.notificationForm.get(key)?.markAsTouched();
      });

      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos requeridos',
        duration: 2000,
        color: 'warning',
        position: 'top'
      });
      await toast.present();
    }
  }

}