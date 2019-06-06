import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsfuerzosPage } from './esfuerzos.page';

const routes: Routes = [
  {
    path: '',
    component: EsfuerzosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsfuerzosPage]
})
export class EsfuerzosPageModule {}
