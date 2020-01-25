import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HolaPage } from './hola.page';
import { AnimalesComponent } from '../componentes/animales/animales.component';
import { ColoresComponent} from '../componentes/colores/colores.component';
import { NumerosComponent } from '../componentes/numeros/numeros.component';
import { IdiomasComponent} from '../componentes/idiomas/idiomas.component';
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
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [HolaPage, AnimalesComponent, IdiomasComponent, ColoresComponent, NumerosComponent]
})
export class HolaPageModule {}
