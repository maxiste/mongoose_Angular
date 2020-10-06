import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  texto: string;
  tipoMensaje: string;
  private mensajeIn = new BehaviorSubject<any>({texto:'', tipoMensaje:''}); //aqui se coloca los parametros o propiedades que yo quiera

  get isMensajeIn() { //este es un metod typescript
    return this.mensajeIn.asObservable();
  }

  constructor() { }   
 
  setMensaje(texto, tipoMensaje) { //donde recibe el mensaje que yo quiera
    this.mensajeIn.next({texto: texto, tipoMensaje: tipoMensaje});
  }

}
