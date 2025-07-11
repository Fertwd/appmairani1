import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
interface estlista{
  name: string;
  redirecTo: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule], //cambios para que funcione
  
})
export class InicioPage implements OnInit {

  Elementos: estlista[ ] = [
    {
      name: 'Alerta', 
      redirecTo: '/alert',
      icon: 'warning-outline'

    },

    {
      name: 'Card', 
      redirecTo: '/card',
      icon: 'card-outline'
    },
    {
      name: 'Chip', 
      redirecTo: '/chip',
      icon: 'hardware-chip-outline'
    },
    {
      name: 'Checkbox', 
      redirecTo: '/checkbox',
      icon: 'checkbox-outline'
    },
    {
      name: 'Fab', 
      redirecTo: '/fab',
      icon: 'list-circle-outline'
    },
    {
      name: 'DateTime', 
      redirecTo: '/datetime',
      icon: 'calendar-outline'
    },
      {
      name: 'Grid', 
      redirecTo: '/grid',
      icon: 'grid-outline'
    },
    {
      name: 'Infinite Scroll', 
      redirecTo: '/infinty',
      icon: 'menu-outline'
    },
    {
      name: 'Inputs', 
      redirecTo: '/inputs',
      icon: 'push-outline'
    },
    {
      name: 'Modal', 
      redirecTo: '/modal',
      icon: 'image-outline'
    },
    {
      name: 'Popover', 
      redirecTo: '/popover',
      icon: 'push-outline'
    },
    {
      name: 'Alumnos', 
      redirecTo: '/alumnolist',
      icon: 'people-outline'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}