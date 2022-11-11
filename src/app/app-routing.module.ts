import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';
const routes: Routes = [
  //aqui definimos el default de lo que debe hacerse para una ruta cualquiera
  //no reconocida (**) y para cuando se envia requerimiento vacio ''
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'detalle-tarea',
    component: DetalleTareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
