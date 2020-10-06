import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.scss']
})
export class EditarProductosComponent implements OnInit {

  _id:string;
  producto:any;
  formProducto:FormGroup;

  constructor(private activedRoute:ActivatedRoute, 
              private productosService: ProductosService, 
              private router: Router,) 
                
              { }

  ngOnInit(): void {
    this._id=this.activedRoute.snapshot.params._id;
    this.formProducto=new FormGroup({ //intsnaciamos y creamo nuestro objeto de inicializacion
      nombre:new FormControl(""),
      descripcion:new FormControl(""),
      proveedor:new FormControl(""),
      precio:new FormControl(null),
      sku:new FormControl("")

    })
    this.productosService.getProductoId(this._id)
                          .subscribe(
                            (res:any)=>{
                              this.producto=res.producto;
                              this.formProducto.get("nombre").setValue(this.producto.nombre);
                              this.formProducto.get("descripcion").setValue(this.producto.descripcion);
                              this.formProducto.get("proveedor").setValue(this.producto.proveedor);
                              this.formProducto.get("precio").setValue(this.producto.precio);
                              this.formProducto.get("sku").setValue(this.producto.sku);
                            },
                            (err:any)=>{
                              console.log(err)
                            }
                          )
  
                        }
                        sendProducto(){
                          const producto= {
                            nombre:this.formProducto.get("nombre").value,
                            descripcion:this.formProducto.get("descripcion").value,
                            proveedor:this.formProducto.get("proveedor").value,
                            precio:this.formProducto.get("precio").value,

                          }
                          this.productosService.putProducto(this._id,producto)
                                                .subscribe(
                                                  (res:any)=>{
                                                    console.log(res);
                                                    this.router.navigate(["/listado-productos"])
                                                },
                                                (err:any)=>{
                                                  console.log(err);
                                                }

                                                )
                        }
}   
