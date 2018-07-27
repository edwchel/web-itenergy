import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../services/list-services/list-services';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  public proyectos: Proyecto[] = [];
  constructor(public _ps:PageService, 
              public route: Router) { }

  ngOnInit() {
    this.proyectos = this._ps.getProyectos();
    console.log(this.proyectos, 'hola')
  }

  verProyecto(idx: number){
    console.log(idx)
    this.route.navigate(['/servicio-item',idx])

  }
}
