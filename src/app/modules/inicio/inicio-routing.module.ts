import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes del navbar
import { StartComponent } from '../../components/start/start.component';
import { ProjectComponent } from '../../components/project/project.component';
import { NewsBlogComponent } from '../../components/news-blog/news-blog.component';
import { ContactComponent } from '../../components/contact/contact.component';

// Componentes de inicio
import { SliderComponent, HomecompanyComponent, HomeceoComponent, HomeservicesComponent, ProcessComponent, ServicesotherComponent,
  TestimonialsComponent, PublicationsComponent, NewsComponent, PartnersComponent } from '../../components/start/index.start';

// Node de contacto maps
import { AgmCoreModule } from '@agm/core';

// Componente temporal pagina web
import { BlogComponent } from '../../components/pages/blog/blog.component';
import { OptimizacionSistemaComponent } from '../../components/pages/cursos/optimizacion-sistema.component';


import { PagesComponent } from '../../components/pages/pages.component';
import { AccessComponent } from '../../components/access/access.component';
import { LinksComponent } from '../../components/start/links/links.component';
import { StatsComponent } from '../../components/start/stats/stats.component';

import { PageService } from '../../services/page.service';

import { DiplomadosComponent } from '../../components/pages/diplomados/diplomados.component';


const routes: Routes = [
  { path: 'inicio', component: StartComponent },
  { path: '', component: StartComponent },
  { path: 'proyecto', component: ProjectComponent },
  { path: 'noticia-blog', component: NewsBlogComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'optimizacion-sistema', component: OptimizacionSistemaComponent },
  { path: 'diplomados', component: DiplomadosComponent },

  { path: 'Page', component: PagesComponent },
  { path: 'Access', component: AccessComponent },
  { path: 'Links', component: LinksComponent },
  { path: 'Stats', component: StatsComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkiR4UnVJBguA1Qmpq95fnx7XWvRw6J4U'
    })
],
  exports: [RouterModule],
  declarations: [
    StartComponent,
    ProjectComponent,
    NewsBlogComponent,
    ContactComponent,

    SliderComponent,
    HomecompanyComponent,
    HomeceoComponent,
    HomeservicesComponent,
    ProcessComponent,
    ServicesotherComponent,
    TestimonialsComponent,
    PublicationsComponent,
    NewsComponent,
    PartnersComponent,

    BlogComponent,
    OptimizacionSistemaComponent,

    PagesComponent,
    AccessComponent,
    LinksComponent,
    StatsComponent
  ]
})
export class InicioRoutingModule { }
