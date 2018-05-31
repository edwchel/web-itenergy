import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  proyectos: Proyecto [] = [];
  lista_item: lista_proyecto[] = [];

  constructor(public http:Http) { 
    // this.cargar_proyecto_example();
    this.cargar_proyecto();
    // this.cargar_id_servicesitem();
  }

  public cargar_proyecto(){
   return this.http.get('assets/data/projectos_idx.json')
      .subscribe(resp =>{
        
        this.proyectos = resp.json();
        console.log(this.proyectos)
  })
  } 

  /*
  public cargar_id_servicesitem(){
   return this.http.get('assets/data/list-services.json')
   .subscribe( data => {
     
     this.lista_item = data.json();
      console.log(this.lista_item);
    
  })
  }*/

  getProyecto(index: string){
    return this.proyectos[index];
  }
  
  /*
  public cargar_proyecto_example(){
  this.http.get('https://pageweb-angularhtml.firebaseio.com/equipo.json')
    .subscribe(respuesta =>{
      // this.cargando = true;
      this.list_proyecto = respuesta.json();

      console.log(this.list_proyecto)
    })

  } */

  
}

export class lista_proyecto{
  producto: string;
  categoria: string;
  subtitulo1: string;
  desc1: string;
  subtitulo2: string;
  desc2: string;
  resumen: string;
  constructor(producto: string,
    categoria: string,
    subtitulo1: string,
    desc1: string,
    subtitulo2: string,
    desc2: string,
    resumen: string){
      this.producto = producto;
      this.categoria = categoria;
      this.subtitulo1 = subtitulo1;
      this.desc1 = desc1;
      this.subtitulo2 = subtitulo2;
      this.desc2 = desc2;
      this.resumen = resumen;
    }
}

export interface Proyecto{
  titulo: string;
  texto: string;
  img: string;
  id: string;

}
