import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfintyPageRoutingModule } from './infinty-routing.module';

import { InfintyPage } from './infinty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfintyPageRoutingModule
  ],
})
export class InfintyPageModule {}
