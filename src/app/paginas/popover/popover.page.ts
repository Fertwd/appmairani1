import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule, FormsModule],

})
export class PopoverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
