import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import type { OverlayEventDetail } from '@ionic/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true, 
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule, FormsModule],
})
export class ModalPage implements OnInit {
  @ViewChild('modal') modal!: HTMLIonModalElement;

  message = 'Este ejemplo modal utiliza activadores para abrir automáticamente un modal cuando se hace clic en el botón.';
  name!: string;

  constructor() {}

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirmar');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirmar') {
      this.message = `Hola, ${event.detail.data}!`;
    }
  }
}
