import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrafCiclePage } from './graf-cicle.page';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: GrafCiclePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), ChartsModule
  ],
  declarations: [GrafCiclePage]
})
export class GrafCiclePageModule {}
