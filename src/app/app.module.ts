import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //para los forjmualrios
import { HttpClientModule } from '@angular/common/http';
//import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
//import { BreadcrumbComponent } from './comunes/breadcrumb/breadcrumb.component';
import { NavComponent } from './comunes/nav/nav.component';
//import { ModalComponent } from './comunes/modal/modal.component';
//import { SpinnerComponent } from './comunes/spinner/spinner.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { BreadcrumbComponent } from './comunes/breadcrumb/breadcrumb.component';
import { ModalComponent } from './comunes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    //BreadcrumbComponent,
    NavComponent,
    //ModalComponent,
    //SpinnerComponent,
    ListadoProductosComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    BreadcrumbComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
