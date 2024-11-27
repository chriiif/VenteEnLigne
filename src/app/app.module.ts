import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AadminComponent } from './composants/aadmin/aadmin.component';
import { AboutComponent } from './composants/about/about.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ChangeradComponent } from './composants/changerad/changerad.component';
import { ContactComponent } from './composants/contact/contact.component';
import { DetailsComponent } from './composants/details/details.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { EvenementComponent } from './composants/evenement/evenement.component';
import { EventsadComponent } from './composants/eventsad/eventsad.component';
import { FooterComponent } from './composants/footer/footer.component';
import { FormMembComponent } from './composants/form-memb/form-memb.component';
import { FormVendComponent } from './composants/form-vend/form-vend.component';
import { IntadminComponent } from './composants/intadmin/intadmin.component';
import { MembreadComponent } from './composants/membread/membread.component';
import { MenuComponent } from './composants/menu/menu.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { PubComponent } from './composants/pub/pub.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipepersoPipe } from './pipeperso.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AadminComponent,
    AboutComponent,
    AccueilComponent,
    ChangeradComponent,
    ContactComponent,
    DetailsComponent,
    ErreurComponent,
    EvenementComponent,
    EventsadComponent,
    FooterComponent,
    FormMembComponent,
    FormVendComponent,
    IntadminComponent,
    MembreadComponent,
    MenuComponent,
    ProduitComponent,
    PubComponent,
    PipepersoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
