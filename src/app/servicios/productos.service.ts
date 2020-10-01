import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"; //para el pipe

@Injectable({
  providedIn: 'root'
  //todo lo que etsa aqui se ejcuta
 
})
export class ProductosService {
  urlProducto = environment.urlProducto;
  constructor(private http:HttpClient) { }  //se inyecta la clase importada }
  getProductos(){
  return this.http.get(this.urlProducto)
                   .pipe(
                     map((res:any)=>{
                       return res
                       
                     })
                   ) //se e pasa la url de la api
  }
}
