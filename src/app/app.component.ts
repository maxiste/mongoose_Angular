import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'compras';
  mensaje:string = "!Hola MUndo Maxiste TipeScript"
  alumno={
    nombre:"maxiste",
    apellido:"Ledezma"
  }
  puntos=0;

  sumaPuntos(){
    this.puntos++;
  }
}
 