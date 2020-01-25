import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'hola', loadChildren:'./hola/hola.module#HolaPageModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'carga-juego', loadChildren: './carga-juego/carga-juego.module#CargaJuegoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
