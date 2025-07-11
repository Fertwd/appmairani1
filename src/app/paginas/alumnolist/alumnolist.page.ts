import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from 'src/app/componentes/componentes.module';


export interface alumnolist {
  name: string;
  imagename: string;
  email: string;
}


@Component({
  selector: 'app-alumnolist',
  templateUrl: './alumnolist.page.html',
  styleUrls: ['./alumnolist.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule, ComponentesModule], 

})
export class AlumnolistPage implements OnInit {


  Elementos: alumnolist[ ] = [
    {
    name: 'Valentin Rivera De Los Santos',
    imagename: 'assets/images/vale.jpg',
    email: 'valenton@gmail.com'
    },
    {
    name: 'Edxel Yahir Villarreal Lopez',
    imagename: 'assets/images/edxel.jpg',
    email: 'edxelini@gmail.com'
    },
    {
    name: 'Pimienta el perro',
    imagename: 'assets/images/chester.jpg',
    email: 'elperroup@gmail.com'
    },
    {
    name: 'Juan Gabriel Leal Treviño',
    imagename: 'assets/images/leal.jpg',
    email: 'jleal@gmail.com'
    },
    {
    name: 'Alejandra Amairanni Vazquez Abundiz',
    imagename: 'assets/images/ama.jpg',
    email: 'aleiscrying@gmail.com'
    },
    {
    name: 'Roberto Abdon Hernandez Garcia',
    imagename: 'assets/images/roberto.jpg',
    email: 'elrooooobert@gmail.com'
    },
    {
    name: 'Jahaziel Carballo Garcia',
    imagename: 'assets/images/jahaziel.jpg',
    email: 'jahaziellol@gmail.com'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
