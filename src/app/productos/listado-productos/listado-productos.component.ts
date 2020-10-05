import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { MensajesService } from 'src/app/servicios/mensajes.service';

//se imporatn los metopds antumaticamente cuando se agrgan la clase de productos.service

class ResProducto{ //se agrego par comolocar 
  productos:Array<Producto>
}

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  //productos:any;
productos:Array<Producto>; //se agrego aregando un objeto como array
modal=false; //definiiendo ventana modalr de cambios
id:string;

formSearch:FormGroup; //donde se importa de la libreria de forms
@ViewChild("search",{static:false}) searchRef:ElementRef;

showSpinner=true; //se agrega cuando se agrega para las busquedas

  constructor(private productosService:ProductosService,
              private mensajesService: MensajesService) { }


  // ESTE GET MOSTRABA EL LISTADO COMPLETO ANTERIOR 
  //ngOnInit(): void {
  //   //se ejecuta cuando ya los componetes estan generado ene l DOM y los pinta
  //   this.productosService.getProductos()
  //                        .subscribe( //devuellve una resputesa observable porque permanece escuchando
  //                         //(res:any)=>{ //aqui odmos cambiar el tipado
  //                         (res:ResProducto)=>{ //aqui odmos cambiar el tipado
  //                           this.productos=res.productos; //me voy a la api es el objeto que mano de la api como producto linea 15 de /routes
  //                           console.log(this.productos)
  //                         }, //sino devuel de devuelve en la segunda si esta caida
  //                         (err:any)=>{
  //                           console.log(err);
  //                         }
  //                        ) 
  // }

  ngOnInit() {
  this.loadProductos();
  this.formSearch=new FormGroup({ //realiza la busqueda en el formulario
    search:new FormControl("")
  });
  this.onSearch(); //se decalra mas abajo dichi metodo
  }
  //busquedas o metodos de Angualr para buscar
loadProductos(){
  this.productosService.getProductos()
              .subscribe((res:any)=>{ //en el anterior se habia definido un objeto tipo array, no utilizado aqui
                  this.showSpinner = false; //este se usa cuando se hace busqueda aprezaca dando vuelta el cursor
                  this.productos = res.productos;
                },(err:any) => {
                  this.showSpinner = false;
                  console.log(err);
                })
}
onSearch() {
  this.formSearch.get('search').valueChanges
                    .subscribe(nombre =>{
                      this.productos = [];
                      this.showSpinner = true;
                      if (nombre !== '') {
                        this.productosService.getProducto(nombre)
                                  .subscribe((res:any)=>{
                                      this.showSpinner = false;
                                      this.productos = res.productos;
                                    },(err:any)=>{
                                      this.showSpinner = false;
                                      console.log(err);
                                    })
                      } else {
                        this.showSpinner = false;
                        this.loadProductos()
                      }
                    })
}

//remover productos

//muestra de ventanas modales

//Oculta ventanas modales

showSearch() {
  this.searchRef.nativeElement.classList.add('open');
}
}
