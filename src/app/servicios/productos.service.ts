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
  //Diferentes Get
  getProductos(){
  return this.http.get(this.urlProducto)
                   .pipe(
                     map((res:any)=>{
                       return res
                       
                     })
                   ) //se e pasa la url de la api
  }

  getProducto(nombre) { //termino de bsuqueda, en tes caso el nombre
    return this.http.get(this.urlProducto + '/search/' + nombre)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  getProductoId(_id:string) { //peticion con id del producto
    return this.http.get(this.urlProducto  + "/" + _id)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  postProducto(producto:Producto){ //con la informacion que vien del formualrio
    return this.http.post(this.urlProducto,producto)
    .pipe(
      map((res:any)=>{
        return res
        
      })
    ) //se e pasa la url de la api
  }

  //Actualizacion
  putProducto(_id:string,producto:any){
    return this.http.put(this.urlProducto +"/"+ _id,producto)
                    .pipe(
                      map((res:any)=>{
                        return res;
                      })
    )

  }
  deleteProducto(_id){
    return this.http.delete(this.urlProducto +"/"+ _id)
                    .pipe(
                      map((res:any)=>{
                        return res;
                      })
                )

  }
}
