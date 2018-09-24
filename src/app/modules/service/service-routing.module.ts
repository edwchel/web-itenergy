import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes de servicios y productos
import { ServicesComponent, AutomatizacionProcesoComponent, DigitalOilfieldComponent,
GestionOrganizacionalComponent, SupportMttoComponent, ConsultancyComponent,
ProductsComponent } from '../../components/services/index.services';

// componente de inicio-start
import { StartComponent } from '../../components/start/start.component';

const routes: Routes = [
  { path: 'servicio', component: ServicesComponent, children:
  [
      { path: 'digital-oilfield', component: DigitalOilfieldComponent },
      { path: 'automatizacion-proceso', component: AutomatizacionProcesoComponent },
      { path: 'gestion-organizacional', component: GestionOrganizacionalComponent },
      { path: 'soporte-mtto', component: SupportMttoComponent },
      { path: 'consulta', component: ConsultancyComponent },
      { path: 'producto', component: ProductsComponent },
      { path: '', component: StartComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    ServicesComponent,
    AutomatizacionProcesoComponent,
    DigitalOilfieldComponent,
    GestionOrganizacionalComponent,
    SupportMttoComponent,
    ConsultancyComponent,
    ProductsComponent
  ]
})
export class ServiceRoutingModule { }
