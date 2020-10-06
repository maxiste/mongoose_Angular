import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() texto:string; //lo que quiere decir que viene de l apdre
@Input() parametro:any;
@Output() action: EventEmitter<any>=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  setAction(action){ //que vien de la vista html
    if (this.parametro){
      this.action.emit({action:action,parametro:this.parametro) {
        
      }})
    }
  }
}
