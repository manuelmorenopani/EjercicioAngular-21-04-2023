import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1CarruselComponent } from './componente1-carrusel/componente1-carrusel.component';
import { Componente2HabilidadesComponent } from './componente2-habilidades/componente2-habilidades.component';
import { Componente3EnlaceComponent } from './componente3-enlace/componente3-enlace.component';
import { Componente4FormularioComponent } from './componente4-formulario/componente4-formulario.component';
import { Componente31Articulo1Component } from './componente3.1-articulo1/componente3.1-articulo1.component';
import { Componente32Articulo2Component } from './componente3.2-articulo2/componente3.2-articulo2.component';

const routes: Routes = [
  {path:'Carrusel',component:Componente1CarruselComponent},
  {path:'Habilidades',component:Componente2HabilidadesComponent},
  {path:'Enlace',component:Componente3EnlaceComponent},
  {path:'Formulario',component:Componente4FormularioComponent},
  {path:'Articulo1',component:Componente31Articulo1Component},
  {path:'Articulo2',component:Componente32Articulo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
