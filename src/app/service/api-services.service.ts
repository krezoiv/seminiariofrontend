import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Integrantes } from '../models';
import { UpdateComponent } from '../components/update/update.component';
import { Int, Integrantes_I } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  url = 'http://localhost:3000/api';
  constructor(
    private _http: HttpClient,

  ) { }

  getIntegrantes() {
    return this._http.get(this.url);
  }

  getOneIntegrantes(id: string): Observable<Integrantes> {
    return this._http.get<Integrantes>(this.url + '/' + id);
  }

  addIntegrante(integrante: any) {
    return this._http.post(this.url, integrante);
  }

  deleteIntegrante(id: string) {
    return this._http.delete(this.url + '/' + id);
  }

  updateIntegrante(integrantes: Integrantes, id: string) {
    return this._http.put(this.url + '/' + id, integrantes);
  }

  public getIPAddress()  
  {  
    return this._http.get("http://api.ipify.org/?format=json");  
  }  

}


export interface IntegrantesAlumnos {
  id?: string;
  carnet?: string;
  nombres?: string;
  apellidos?: string;
  telefono?: string;
  email?: string;
}
