import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('nav', {static: false}) navRef: ElementRef;
  texto: string;
  tipoMensaje: string;
  subscripMensaje: Subscription; //necesitamos y lo implemneta rjxs
  showMensaje = false;
  timer: any; //para que tome los mensajes de acuerdo al mensaje nuevo entrado es decir lo reinicia

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.subscripMensaje = this.mensajesService.isMensajeIn
                                    .subscribe((data:any)=>{
                                        window.clearTimeout(this.timer); //borra el anterior y mantiene el actual y mantiene el ultimo mensaje
                                        this.showMensaje = true;
                                        this.timer = setTimeout(()=>{
                                          this.showMensaje = false;
                                        }, 5000);
                                        this.texto = data.texto;
                                        this.tipoMensaje = data.tipoMensaje;
                                      },(err:any)=>{
                                        console.log(err);
                                      })
  }

  toggleMenu() {
    this.navRef.nativeElement.classList.toggle('open');
  }

}
