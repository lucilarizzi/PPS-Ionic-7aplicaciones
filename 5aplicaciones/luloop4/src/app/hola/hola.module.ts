import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HolaPage } from './hola.page';
import { LottieAnimationViewModule } from 'ng-lottie'

const routes: Routes = [
  {
    path: '',
    component: HolaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LottieAnimationViewModule.forRoot()
  ],
  declarations: [HolaPage]
})
export class HolaPageModule {}
