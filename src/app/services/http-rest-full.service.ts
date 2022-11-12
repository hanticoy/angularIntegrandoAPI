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
}

