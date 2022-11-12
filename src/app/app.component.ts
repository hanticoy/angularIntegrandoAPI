import { Component, OnInit } from '@angular/core';
import { HttpRestFullService } from '../app/services/http-rest-full.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestFull Task API';

  TituloTareas: string = '';
  TituloDetalle: string = '';

  // Establece las tareas de atributo para que sean un array.
  listaTareas: any;
  Tarea: any;

  constructor(private _httpService: HttpRestFullService) { }

  // //metodos de ejemplo para interactuar con el HTML
  // onButtonClick(){
  //   console.log(`Click event is working`);
  // }

  // onButtonClickParam(num: Number){
  //   console.log(`Click event is working with num param: ${num}`);
  // }
  // onButtonClickParams(num: Number, str: String){
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any){
  //   console.log(`Click event is working with event: ${event}`);
  // }

  ngOnInit() {}

  getTasksFromService() {
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        // console.log("app.component:", data);
        this.listaTareas = data;
        //console.log("app.component tasks:", this.listaTareas);
      });

      this.TituloTareas='Tareas Agendadas';
  }

  getQueryTaskById(id:string) {
    let observable = this._httpService.getQueryById(id);
    observable.subscribe(data => {
      // console.log("app.component:", data);
      this.Tarea = data;
      console.log("app.component tasks:", this.Tarea);
    });

    this.TituloDetalle='Detalle de Tarea';
  }

}


