import { Proyecto } from '../components/services/list-services/list-services';
import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PageService {

  pruebas: Prueba [] = [];
  
  constructor(public http:Http) { 
   
    this.cargar_proyecto();
    this.getProyectos();
    console.log(this.getProyectos())
  }

  public cargar_proyecto(){
   return this.http.get('assets/data/projectos_idx.json')
      .subscribe(resp =>{
        
        this.pruebas = resp.json();
        console.log(this.pruebas)
  })
  } 
  getPrueba(index: string){
    return this.pruebas[index];
  }
  
  public getProyectos(): Proyecto[]  {
    return this.proyectos;
  }

  public getProyecto(index: string) {
    return this.proyectos[index];
  }
  
  public proyectos: Proyecto[] = [
    {
      titulo: "Telemetría móvil en separadores de Well Testing",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque repellendus commodi nam vero a explicabo non facilis! Alias harum officiis maiores quaerat tempore esse provident neque veritatis culpa explicabo.",
      img : "assets/images/proyectos/chincometro_01.jpg",
      id:"separadores"
      }, {
      titulo: "Telesupervisión de Oleoductos en el valle Texas",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque repellendus commodi nam vero a explicabo non facilis! Alias harum officiis maiores quaerat tempore esse provident neque veritatis culpa explicabo.",
      img: "assets/images/proyectos/medicion-de-ductos-ABB.jpg",
      id: "oleoductos"
      }, {
      titulo: "Telesupervisión y control de pozos petróleros",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque repellendus commodi nam vero a explicabo non facilis! Alias harum officiis maiores quaerat tempore esse provident neque veritatis culpa explicabo.",
      img: "assets/images/proyectos/tc_pp.jpg",
      id: "telesupervision"
      },{
      titulo: "Monitoreo de compresores en boca de pozo",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque repellendus commodi nam vero a explicabo non facilis! Alias harum officiis maiores quaerat tempore esse provident neque veritatis culpa explicabo.",
      img: "assets/images/proyectos/Mc_bp.jpg",
      id: "compresores"
      },{
      titulo: "Monitoreo de variables en Puntos Fiscales de medición y transferencia de custodia",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque repellendus commodi nam vero a explicabo non facilis! Alias harum officiis maiores quaerat tempore esse provident neque veritatis culpa explicabo.",
      img: "assets/images/proyectos/Mv_pf.JPG",
      id: "monitoreo"
  
      }
  ]

}

export interface Prueba{
  titulo: string;
  texto: string;
  img: string;
  id: string;

}
