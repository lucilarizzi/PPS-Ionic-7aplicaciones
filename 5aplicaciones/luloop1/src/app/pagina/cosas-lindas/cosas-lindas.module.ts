import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CosasLindasPage } from './cosas-lindas.page';
import { GaleriaComponent } from '../../componentes/galeria/galeria.component';
import { GrafLineasPage } from '../../componentes/graf-lineas/graf-lineas.page';
import { GrafCiclePage } from 'src/app/componentes/graf-cicle/graf-cicle.page';
import { ChartsModule } from 'ng2-charts';
import { LottieAnimationViewModule } from 'ng-lottie'


const routes: Routes = [
  {
    path: '',
    component: CosasLindasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  LottieAnimationViewModule.forRoot(),
    RouterModule.forChild(routes), ChartsModule,  
  ],
  declarations: [CosasLindasPage, GaleriaComponent, GrafLineasPage, GrafCiclePage]
})
export class CosasLindasPageModule { }
