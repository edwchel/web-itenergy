import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-services-item',
  templateUrl: './list-services-item.component.html',
  styles: []
})
export class ListServicesItemComponent implements OnInit {

  proyecto: any = undefined;
  constructor(public _ps: PageService,
              private route: ActivatedRoute) {
  
    this.route.params.subscribe(parametro=>{
      console.log(parametro['id']);
      this.proyecto = this._ps.getProyecto(parametro['id'])
      console.log(this.proyecto)
      }
    )

    /*this.route.params.subscribe(parametro =>{
      console.log(parametro)
        console.log(parametro["id"])
      this._ps.getProyecto(parametro["id"]).subscribe(parametro =>{
        this.lista_item = parametro;
        console.log(this.lista_item);
      })
     _ps.cargar_id_servicesitem(parametro["id"])
        .subscribe( respuesta => {
            
            this.id = parametro['id']
            this.lista_item = respuesta.json();
            console.log(respuesta.json());
            console.log(this.lista_item);
          });
      
    }); */
  }

  ngOnInit() {
  }

}
