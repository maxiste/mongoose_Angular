import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
//se imporatn los metopds antumaticamente cuando se agrgan la clase de productos.service
@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {
productos:any;


  constructor(private productosService:ProductosService) { }


  ngOnInit(): void {
    //se ejecuta cuando ya los componetes estan generado ene l DOM y los pinta
    this.productosService.getProductos()
                         .subscribe( //devielve una resputesa observable
                          (res:any)=>{
                            this.productos=res.productos; //me voy a la api es el objeto que mano de la api
                            console.log(this.productos)
                          }, //sino devuel de devuelve en la segunda si esta caida
                          (err:any)=>{
                            console.log(err);
                          }
                         ) 
  }

}
