import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes de compania-it
import { CeoComponent, HseComponent, IdentityComponent, TheCompanyComponent,
CompanyComponent, MisionVisionComponent } from '../../components/company/index.company';

// componente de inicio-start
import { StartComponent } from '../../components/start/start.component';

const routes: Routes = [
  { path: 'it', component: CompanyComponent, children:
  [
      { path: 'ceo', component: CeoComponent },
      { path: 'hse', component: HseComponent },
      { path: 'identidad', component: IdentityComponent },
      { path: 'mision-vision', component: MisionVisionComponent },
      { path: 'quienes-somos', component: TheCompanyComponent },
      { path: '', component: StartComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    CompanyComponent,
    CeoComponent,
    HseComponent,
    MisionVisionComponent,
    IdentityComponent,
    TheCompanyComponent
  ]
})
export class CompanyRoutingModule { }
