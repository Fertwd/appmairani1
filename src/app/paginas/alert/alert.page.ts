import { Component, OnInit } from '@angular/core';
import { AlertController, IonAlert, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule, ComponentesModule],
  
})

export class AlertPage implements OnInit {

  constructor(private CtrlAlert: AlertController) { }

  ngOnInit() {
  }

  async functionalerta1() {
    const alert = await this.CtrlAlert.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async functionalerta2() {
    const alert = await this.CtrlAlert.create({
      header: 'Please Enter Info',
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido Paterno',
        },
        {
          placeholder: 'Apellido Materno',
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
      ],
      buttons: ['OK'],
    });

    await alert.present();
  }
  
async functionalerta3() {
  const alert = await this.CtrlAlert.create({
    header: 'Confirm!',
    message: 'Are you sure you want to proceed?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      },
    ],
  });

  await alert.present();
}

async functionalerta4() {
  const alert = await this.CtrlAlert.create({
    backdropDismiss: false,
    header: 'Que quieres hacer con tu producto?',
    subHeader: 'Soy algo referente al producto que debes elegir',
    message: 'Selecciona una opción',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'alert-button-cancel',
      },
      {
        text: 'Borrar',
        role: 'destructive',
        cssClass: 'alert-button-confirm',
      },
      {
        text: 'Guardar',
        role: 'save',
        cssClass: 'alert-button-confirm',
      },
    ],
  });

  await alert.present();
}

async functionalerta5() {
  const alert = await this.CtrlAlert.create({
    header: 'Please Enter Info',
    inputs: [
      {
        name: 'nombre',
        type: 'text',
        placeholder: 'Nombre',
      },
      {
        name: 'apellidoPaterno',
        type: 'text',
        placeholder: 'Apellido Paterno',
      },
      {
        name: 'apellidoMaterno',
        type: 'text',
        placeholder: 'Apellido Materno',
      },
      {
        name: 'age',
        type: 'number',
        placeholder: 'Edad',
        min: 1,
        max: 100,
      },
    ],
    buttons: [
      {
        text: 'OK',
        handler: (data) => {
          console.log(data);
        }
      }
    ],
  });

  await alert.present();
}

}



