import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Integrantes } from '../models';
import { environment } from 'src/environments/environment';

const url ='http://44.211.198.198:3000/api';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  
 

  constructor(
    private _http: HttpClient,

  ) { }

  getIntegrantes() {
    return this._http.get(url);
  }

  getOneIntegrantes(id: string): Observable<Integrantes> {
    return this._http.get<Integrantes>(url + '/' + id);
  }

  addIntegrante(integrante: any) {
    return this._http.post(url, integrante);
  }

  deleteIntegrante(id: string) {
    return this._http.delete(url + '/' + id);
  }

  updateIntegrante(integrantes: Integrantes, id: string) {
    return this._http.put(url + '/' + id, integrantes);
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
