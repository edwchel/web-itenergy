import { NgModule } from "@angular/core";

import { CeoComponent } from "./ceo/ceo.component";
import { CompanyComponent } from "./company.component";
import { HseComponent } from "./hse/hse.component";
import { IdentityComponent } from "./identity/identity.component";
import { MisionVisionComponent } from "./mision-vision/mision-vision.component";
import { TheCompanyComponent } from "./the-company/the-company.component";


@NgModule({
    declarations:  [
        CompanyComponent,
        CeoComponent,
        HseComponent,
        IdentityComponent,
        MisionVisionComponent,
        TheCompanyComponent
    ],
    exports: [CompanyComponent]
})

export class CompanyModule {
}
