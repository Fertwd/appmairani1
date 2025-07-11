import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfintyPage } from './infinty.page';

const routes: Routes = [
  {
    path: '',
    component: InfintyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfintyPageRoutingModule {}
