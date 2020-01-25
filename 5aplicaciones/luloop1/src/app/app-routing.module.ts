import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HolaPage } from './hola/hola.page';


const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'hola', loadChildren:'./hola/hola.module#HolaPageModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'cosas/:id', loadChildren: './pagina/cosas-lindas/cosas-lindas.module#CosasLindasPageModule' },
  { path: 'graf-lineas', loadChildren: './componentes/graf-lineas/graf-lineas.module#GrafLineasPageModule' },
  { path: 'graf-cicle', loadChildren: './componentes/graf-cicle/graf-cicle.module#GrafCiclePageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
