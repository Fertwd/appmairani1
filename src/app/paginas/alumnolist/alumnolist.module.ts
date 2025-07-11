import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnolistPageRoutingModule } from './alumnolist-routing.module';

import { AlumnolistPage } from './alumnolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnolistPageRoutingModule
  ],
})
export class AlumnolistPageModule {}
