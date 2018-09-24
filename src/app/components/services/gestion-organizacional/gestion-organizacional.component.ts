import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-gestion-organizacional',
  templateUrl: './gestion-organizacional.component.html',
  styleUrls: ['./gestion-organizacional.component.css']
})
export class GestionOrganizacionalComponent implements OnInit {

  titulo: string;
  constructor( public router: Router) {
    this.getDataRoute()
    .subscribe(data => {
      console.log(data);
      this.titulo = data.path;
    });

   }

  ngOnInit() {
  }


  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.routeConfig)
    );
  }
}
