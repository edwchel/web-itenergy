import { Router } from '@angular/router';
import { PageService, Proyecto } from '../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  constructor(public _ps:PageService, 
              public route: Router) { }

  ngOnInit() {
    
  }

  verProyecto(idx: number){
    console.log(idx)
    this.route.navigate(['/servicio-item',idx])

  }
}
