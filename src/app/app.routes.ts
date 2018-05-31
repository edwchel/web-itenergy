// import { ServicesComponent } from './components/services/services.component';
// import { AccessComponent } from './components/access/access.component';
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
import { IntegrationComponent } from './components/services/integration/integration.component';
  import { IntegrationItemComponent } from './components/services/integration/integration-item.component';
import { ListServicesComponent } from './components/services/list-services/list-services.component';
  import { ListServicesItemComponent } from './components/services/list-services/list-services-item.component';
import { ProductsComponent } from './components/services/products/products.component';
import { SupportMttoComponent } from './components/services/support-mtto/support-mtto.component';



const APP_ROUTES: Routes = [
  { path: 'inicio', component: StartComponent },
  { path: 'ceo', component: CeoComponent },
  { path: 'hse', component: HseComponent },
  { path: 'identidad', component: IdentityComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'quienes-somos', component: TheCompanyComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'noticia-blog', component: NewsBlogComponent },
  { path: 'pagina', component: PagesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'proyecto', component: ProjectComponent },
  /*{ path: 'servicio', component: ServicesComponent,
        children: START_ROUTES
    },*/
  { path: 'consulta', component: ConsultancyComponent },
  { path: 'integra', component: IntegrationComponent },
  { path: 'integra-item/:id', component: IntegrationItemComponent },
  { path: 'lista-servicio', component: ListServicesComponent },
  { path: 'servicio-item/:id', component: ListServicesItemComponent },
  { path: 'soporte-mtto', component: SupportMttoComponent },
  { path: 'producto', component: ProductsComponent },
  // { path: 'acceso', component: AccessComponent },
  // { path: 'rendicion/:id', component: RendicionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
