import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplashPage } from './splash.page';
import { LottieAnimationViewModule } from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: SplashPage
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
  declarations: [SplashPage]
})
export class SplashPageModule {}
