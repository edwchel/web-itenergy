// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InfocontactComponent } from './components/shared/infocontact/infocontact.component';
import { FooterComponent } from "./components/shared/footer/footer.component";

import { AccessComponent } from './components/access/access.component';
import { ProjectComponent } from './components/project/project.component';
import { PagesComponent } from './components/pages/pages.component';
import { NewsBlogComponent } from './components/news-blog/news-blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { StartModule } from './components/start/start.module';
import { NgModule } from '@angular/core';
import { CompanyModule } from './components/company/company.module';
import { ServicesModule } from './components/services/services.module';
import { AgmCoreModule } from '@agm/core';

// Rutes
import { APP_ROUTING } from './app.routes';
import { PageService } from './services/page.service';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfocontactComponent,
    FooterComponent,
    AccessComponent,
    ProjectComponent,
    PagesComponent,
    NewsBlogComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    StartModule,
    CompanyModule,
    ServicesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkiR4UnVJBguA1Qmpq95fnx7XWvRw6J4U'
    }),
    HttpModule
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
