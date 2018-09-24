import { StartComponent } from './components/start/start.component';
import { RouterModule, Routes } from '@angular/router';

import { CeoComponent } from './components/company/ceo/ceo.component';
import { HseComponent } from './components/company/hse/hse.component';
import { IdentityComponent } from './components/company/identity/identity.component';
import { MisionVisionComponent } from './components/company/mision-vision/mision-vision.component';
import { TheCompanyComponent } from './components/company/the-company/the-company.component';

import { ContactComponent } from './components/contact/contact.component';
import { NewsBlogComponent } from './components/news-blog/news-blog.component';
import { PagesComponent } from './components/pages/pages.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ProjectComponent } from './components/project/project.component';

import { ConsultancyComponent } from './components/services/consultancy/consultancy.component';

import { ProductsComponent } from './components/services/products/products.component';
import { SupportMttoComponent } from './components/services/support-mtto/support-mtto.component';
import { OptimizacionSistemaComponent } from './components/pages/cursos/optimizacion-sistema.component';
import { DigitalOilfieldComponent } from './components/services/digital-oilfield/digital-oilfield.component';
import { GestionOrganizacionalComponent } from './components/services/gestion-organizacional/gestion-organizacional.component';
import { AutomatizacionProcesoComponent } from './components/services/automatizacion-proceso/automatizacion-proceso.component';

import { ServicesComponent } from './components/services/services.component';



const APP_ROUTES: Routes = [
  { path: 'inicio', component: StartComponent },
  // { path: 'ceo', component: CeoComponent },
  // { path: 'hse', component: HseComponent },
  // { path: 'identidad', component: IdentityComponent },
  // { path: 'mision-vision', component: MisionVisionComponent },
  // { path: 'quienes-somos', component: TheCompanyComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'noticia-blog', component: NewsBlogComponent },
  // { path: 'pagina', component: PagesComponent },
  // { path: 'blog', component: BlogComponent },
  { path: 'proyecto', component: ProjectComponent },
  // { path: 'integra', component: IntegrationComponent },
  // { path: 'integra-item/:id', component: IntegrationItemComponent },
  // { path: 'lista-servicio', component: ListServicesComponent },
  // { path: 'servicio-item/:id', component: ListServicesItemComponent },
  /* { path: 'servicio', component: ServicesComponent,
        children: ServicesRoutes
  },
  { path: 'consulta', component: ConsultancyComponent },
  { path: 'soporte-mtto', component: SupportMttoComponent },
  { path: 'producto', component: ProductsComponent },
  { path: 'digital-oilfield', component: DigitalOilfieldComponent },
  { path: 'automatizacion-proceso', component: AutomatizacionProcesoComponent },
  { path: 'gestion-organizacional', component: GestionOrganizacionalComponent },*/
  // { path: 'acceso', component: AccessComponent },
  // { path: 'optimizacion-sistema', component: OptimizacionSistemaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
