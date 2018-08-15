import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DudasComponent }   from './dudas/dudas.component';
import { RecomendacionesComponent }   from './recomendaciones/recomendaciones.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dudas',
    component: DudasComponent
  },
  {
    path: 'recomendaciones',
    component: RecomendacionesComponent
  },
  {
    path: 'tutoriales',
    component: TutorialesComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes), CommonModule ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
