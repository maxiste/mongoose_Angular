import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';
//se imporatn los metopds antumaticamente cuando se agrgan la clase de productos.service

class ResProducto{
  productos:Array<Producto>
}

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {
//productos:any;
productos:Array<Producto>; //se agrego nueo


  constructor(private productosService:ProductosService) { }


  ngOnInit(): void {
    //se ejecuta cuando ya los componetes estan generado ene l DOM y los pinta
    this.productosService.getProductos()
                         .subscribe( //devielve una resputesa observable
                          //(res:any)=>{ //aqui odmos cambiar el tipado
                          (res:ResProducto)=>{ //aqui odmos cambiar el tipado
                            this.productos=res.productos; //me voy a la api es el objeto que mano de la api como producto linea 15 de /routes
                            console.log(this.productos)
                          }, //sino devuel de devuelve en la segunda si esta caida
                          (err:any)=>{
                            console.log(err);
                          }
                         ) 
  }

}
