import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'conceptos', 
    loadChildren: './conceptos/conceptos.module#ConceptosPageModule' 
  },
  { 
    path: 'esfuerzos', 
    loadChildren: './esfuerzos/esfuerzos.module#EsfuerzosPageModule' 
  },
  { 
    path: 'solicitudes',
    loadChildren: './solicitudes/solicitudes.module#SolicitudesPageModule' 
  },
  { path: 'formula1', loadChildren: './formula1/formula1.module#Formula1PageModule' },
  { path: 'teoria1', loadChildren: './teoria1/teoria1.module#Teoria1PageModule' },
  { path: 'ejercicio1', loadChildren: './ejercicio1/ejercicio1.module#Ejercicio1PageModule' },
  { path: 'video1', loadChildren: './video1/video1.module#Video1PageModule' },
  { path: 'teoria2', loadChildren: './teoria2/teoria2.module#Teoria2PageModule' },
  { path: 'ejercicio2', loadChildren: './ejercicio2/ejercicio2.module#Ejercicio2PageModule' },
  { path: 'formula2', loadChildren: './formula2/formula2.module#Formula2PageModule' },
  { path: 'teoria3', loadChildren: './teoria3/teoria3.module#Teoria3PageModule' },
  { path: 'formula3', loadChildren: './formula3/formula3.module#Formula3PageModule' },
  { path: 'ejercicio3', loadChildren: './ejercicio3/ejercicio3.module#Ejercicio3PageModule' },
  { path: 'video3', loadChildren: './video3/video3.module#Video3PageModule' },
  { path: 'teoria4', loadChildren: './teoria4/teoria4.module#Teoria4PageModule' },
  { path: 'formula4', loadChildren: './formula4/formula4.module#Formula4PageModule' },
  { path: 'ejercicio4', loadChildren: './ejercicio4/ejercicio4.module#Ejercicio4PageModule' },
  { path: 'video4', loadChildren: './video4/video4.module#Video4PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
