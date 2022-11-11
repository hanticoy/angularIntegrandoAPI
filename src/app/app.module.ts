import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRestFullService } from '../app/services/http-rest-full.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component'

import { BateriaInternaService } from './services/bateria-interna.service'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DetalleTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRestFullService,
              BateriaInternaService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
