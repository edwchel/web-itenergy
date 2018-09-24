import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AgmCoreModule } from '@agm/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { CompanyRoutingModule } from '../company/company-routing.module';
import { ServiceRoutingModule } from '../service/service-routing.module';
import { PageService } from '../../services/page.service';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    CompanyRoutingModule,
    ServiceRoutingModule
  ],
  declarations: []
})
export class InicioModule { }
