import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { ComponentesModule } from '../../componentes/componentes.module';
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
  imports: [CommonModule, RouterModule, IonicModule, ComponentesModule],
})



export class DatetimePage implements OnInit {
  selectedDate: string = new Date().toISOString();
  date() {
    console.log(new Date(this.selectedDate).toLocaleDateString());
  }
  getDate(event: any) {
    const dateObj = new Date(event.detail.value);
    console.log('Día seleccionado:', dateObj.getDate());
    console.log('Fecha legible:', dateObj.toLocaleDateString()); 
    console.log(event);
    console.log(event.detail);
    console.log(event.detail.value);
    }

  constructor() { }

  ngOnInit() {
  }

}