import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargaJuegoPage } from './carga-juego.page';
import { ListadoCompComponent } from '../listado-comp/listado-comp.component';

const routes: Routes = [
  {
    path: '',
    component: CargaJuegoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CargaJuegoPage, ListadoCompComponent]
})
export class CargaJuegoPageModule {}
