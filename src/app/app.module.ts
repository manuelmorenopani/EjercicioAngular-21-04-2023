import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1CarruselComponent } from './componente1-carrusel/componente1-carrusel.component';
import { Componente2HabilidadesComponent } from './componente2-habilidades/componente2-habilidades.component';
import { Componente3EnlaceComponent } from './componente3-enlace/componente3-enlace.component';
import { Componente4FormularioComponent } from './componente4-formulario/componente4-formulario.component';
import { Componente31Articulo1Component } from './componente3.1-articulo1/componente3.1-articulo1.component';
import { Componente32Articulo2Component } from './componente3.2-articulo2/componente3.2-articulo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1CarruselComponent,
    Componente2HabilidadesComponent,
    Componente3EnlaceComponent,
    Componente4FormularioComponent,
    Componente31Articulo1Component,
    Componente32Articulo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
