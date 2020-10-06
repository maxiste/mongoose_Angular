import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  rutas: any;

  constructor(private activedRoute: ActivatedRoute) { } //se trae la librreria

  ngOnInit(): void {
    this.activedRoute.data //que es el date de app-prutin.module
                    .subscribe((data)=>{
                      this.rutas=data.rutas;
                      console.log(this.rutas)
                    })
  }

}
