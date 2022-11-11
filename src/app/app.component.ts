import { Component, OnInit } from '@angular/core';
import { HttpRestFullService } from '../app/services/http-rest-full.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularApi';

  // Establece las tareas de atributo para que sean un array.
  listaTareas: any;
  Tarea: any;

  constructor(private _httpService: HttpRestFullService) { }

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      // console.log("app.component:", data);
      this.listaTareas = data;
      //console.log("app.component tasks:", this.listaTareas);
    });
  }

  getQueryTaskById(){
    let observable = this._httpService.getQueryById();
    observable.subscribe(data => {
      // console.log("app.component:", data);
      this.Tarea = data;
     // console.log("app.component tasks:", this.Tarea);
    });
  }

}


