import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BateriaInternaService {

  constructor(private _http: HttpClient){}

  //debemos hacer el crud
  getTareas(){
      let url = environment.urlBateriaInternaService + '/queryAll';
      this._http.get(url);

  }
}
