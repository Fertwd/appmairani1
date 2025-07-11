import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnolistPage } from './alumnolist.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnolistPageRoutingModule {}
