import { NgModule } from "@angular/core";
import { StartComponent } from "./start.component";
import { SliderComponent } from "./slider/slider.component";
import { HomecompanyComponent } from "./homecompany/homecompany.component";
import { HomeceoComponent } from './homeceo/homeceo.component';
import { HomeservicesComponent } from "./homeservices/homeservices.component";
import { LinksComponent } from "./links/links.component";
import { ProcessComponent } from "./process/process.component";
import { StatsComponent } from "./stats/stats.component";
import { ServicesotherComponent } from "./servicesother/servicesother.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { PublicationsComponent } from "./publications/publications.component";
import { NewsComponent } from "./news/news.component";
import { PartnersComponent } from "./partners/partners.component";
import { APP_ROUTING } from "../../app.routes";


@NgModule({
    declarations:  [
        StartComponent,
        SliderComponent,
        HomecompanyComponent,
        HomeceoComponent,
        HomeservicesComponent,
        LinksComponent,
        ProcessComponent,
        StatsComponent,
        ServicesotherComponent,
        TestimonialsComponent,
        PublicationsComponent,
        NewsComponent,
        PartnersComponent
    ],
    imports: [APP_ROUTING

    ],
    exports: [StartComponent],
    // providers: [ChartService]
})

export class StartModule {

}