import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';

const routes: Routes = [
  {
   path:'', 
   component: InicioComponent,
   data: {rutas: [{ruta:'/',texto:'Inicio'}]}
  },

  {
   path:'listado-productos', 
   component: ListadoProductosComponent,
   data: {rutas: [{ruta:'/',texto:'Inicio'},
         {ruta:'/listado-productos',texto:'Listado de Productos'}]}
  },
  // {
  //   path:'listado-clientes', 
  //   //component: ListadoClientesComponent,
  //   data: {rutas: [{ruta:'/',texto:'Inicio'},
  //         {ruta:'/listado-clientes',texto:'Listado de Clientes'}]}
  //  },

  {
   path:'crear-productos', 
   component: CrearProductosComponent,
   data: {rutas: [
                  {ruta:'/',texto:'Inicio'},
                  {ruta:'/listado-productos',texto:'Listado de productos'},
                  {ruta:'/crear-productos',texto:'Crear producto'}
                ]
          }
  },
  {
   path:'editar-productos/:_id', 
   component: EditarProductosComponent,
   data: {rutas: [
                  {ruta:'/',texto:'Inicio'},
                  {ruta:'/listado-productos',texto:'Listado de productos'},
                  {ruta:'/editar-productos/:_id',texto:'Editar producto'}
                ]
          }
  },
  {path:"**", component:InicioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
