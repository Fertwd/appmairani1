import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ComponentesModule } from '../../componentes/componentes.module';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, ComponentesModule], 
})
export class CheckboxPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  infoNombres = [
    { name: 'Valentin', beca: false },
    { name: 'Roberto', beca: true },
    { name: 'Aaron', beca: false },
    { name: 'Max', beca: false },
    { name: 'Juan', beca: true }
  ];
}

