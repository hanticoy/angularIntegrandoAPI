import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { queryById } from '../interfaces/task-interface'


@Injectable({
  providedIn: 'root'
})
export class HttpRestFullService {

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get(environment.urlServiceQueryAll);
  }

  getQueryById(id:String) {

    let url= `${environment.urlServiceQueryById}/${id}`;
    //Por ahora pasa en la URL,  pero hay que averiguar como pasarla en el body
    //aqui la intefaz queryBiId define la salida de la API como un estandar requerido para la RESPUESTA, si esta cambiara debiera dar un error
    return this._http.get<queryById>(url);
  }
  addTask(newTask:any){
    return this._http.post(environment.urlServiceNew,newTask);
  }
  updateTask(editTask:any){
    // console.log('service:' + editTask);

    return this._http.put(environment.urlServiceUpdate,editTask);
  }

  deleteTask(id:String){
    let url= `${environment.urlServiceDelete}/${id}`;
    return this._http.delete(url);
  }
}

