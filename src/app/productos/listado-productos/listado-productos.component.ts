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
textoModal="¿Esta seguro que quiere Elimnar el Producto?"
_id:string;

formSearch:FormGroup; //donde se importa de la libreria de forms se agrega automatica,memte
@ViewChild("search",{static:false}) searchRef:ElementRef; //el elemenRef del core de angular

showSpinner=true; //se agrega cuando se agrega para las busquedas
consultando=false;
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
  this.onSearch(); //se declara mas abajo dichi metodo y muestre lo que hace el metodo
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
onSearch() { //para que detecte los cambios cuando escribes en la busqueda
  this.formSearch.get('search').valueChanges
                    .subscribe(nombre =>{
                      this.productos = [];
                      this.showSpinner = true;
                      if (nombre !== '') {
                        this.consultando=true;
                        this.productosService.getProducto(nombre)
                                  .subscribe((res:any)=>{
                                      this.showSpinner = false;
                                      this.productos = res.productos;
                                    },(err:any)=>{
                                      this.consultando=false;
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
removeProducto(_id){
  this.productosService.deleteProducto(_id)
                        .subscribe(
                          (res:any)=>{
                            console.log(res);
                            this.loadProductos()
                        },
                        (err:any)=>{
                          console.log(err)
                        }
                        )
}

//muestra de ventanas modales
showModal(){
  this._id=this._id;

}
//Oculta ventanas modales

showSearch() {
  this.searchRef.nativeElement.classList.add('open'); // parecido a jquery cuando se agrega elementos del css ejemplo
  //this.searchRef.nativeElement.classList.toggle('open'); // parecido a jquery cuando se agrega elementos del css ejemplo
}
getAction(event){
 if (event.action){
   this.removeProducto(event.parametro);
 }
}
}
