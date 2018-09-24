// Components
import { AppComponent } from './app.component';

// componentes del navbar
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InfocontactComponent } from './components/shared/infocontact/infocontact.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { PageService } from './services/page.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InicioModule } from './modules/inicio/inicio.module';
import { DiplomadosComponent } from './components/pages/diplomados/diplomados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfocontactComponent,
    FooterComponent,
    DiplomadosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InicioModule,
    AppRoutingModule
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
