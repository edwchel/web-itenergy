import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

/*Declarar variables*/ /*
panel=['panel-success','panel-info','panel-primary','panel-secundary'];
indice=0;
datos_blog;
equipo;
iteraciones=0;
*/
  constructor(private ps: PageService) {

   }

  ngOnInit() { /*
 this.datos_blog= this.ps.getData('assets/data/projectos_idx.json').subscribe(val=>{
   this.datos_blog=val;
console.log('la nueva funcion tiene esto: '+ this.datos_blog.equipo[0].titulo);
this.iteraciones=this.datos_blog.equipo.length;
console.log('ESTO ES EL NUMERO DE DATOS QUE TEGO ALOJADOS EN MI ARREGLO: '+this.iteraciones);
}); */
  }

}
