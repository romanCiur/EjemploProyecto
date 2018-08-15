import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DudasComponent } from './dudas/dudas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { ContenidoTutoComponent } from './contenido-tuto/contenido-tuto.component';

@NgModule({
  declarations: [
    AppComponent,
    DudasComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    RecomendacionesComponent,
    TutorialesComponent,
    ContenidoTutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
