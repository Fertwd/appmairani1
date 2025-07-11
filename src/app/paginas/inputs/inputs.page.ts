import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule, FormsModule],
})
export class InputsPage implements OnInit {

  alumnos = [
    {
      nombre: 'Juan Fernando',
      apellidopaterno: 'Zapata',
      apellidomaterno: 'Cordova',
      matricula: '202200097',
      fechaNacimiento: '2004-06-20'
    },
  ];

  constructor() { }

  ngOnInit() { }

  calcularEdad(fechaNacimiento: string): number {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  get edad() {
    return this.calcularEdad(this.alumnos[0].fechaNacimiento);
  }

}

