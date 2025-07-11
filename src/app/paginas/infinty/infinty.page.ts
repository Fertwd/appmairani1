import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';

@Component({
  selector: 'app-infinty',
  templateUrl: './infinty.page.html',
  styleUrls: ['./infinty.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule],
})
export class InfintyPage implements OnInit {
  datos: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const nuevos = Array(28).fill(null);
    this.datos.push(...nuevos);
  }

  loadMore(event: any) {
    setTimeout(() => {
      this.cargarDatos();
      event.target.complete();
    }, 500); 
  }
}
