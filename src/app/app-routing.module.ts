import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './composants/contact/contact.component';
import { AadminComponent } from './composants/aadmin/aadmin.component';
import { IntadminComponent } from './composants/intadmin/intadmin.component';
import { authguardGuard } from './authguard.guard';
import { EventsadComponent } from './composants/eventsad/eventsad.component';
import { MembreadComponent } from './composants/membread/membread.component';
import { ChangeradComponent } from './composants/changerad/changerad.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { FormMembComponent } from './composants/form-memb/form-memb.component';
import { FormVendComponent } from './composants/form-vend/form-vend.component';
import { AboutComponent } from './composants/about/about.component';
import { EvenementComponent } from './composants/evenement/evenement.component';
import { DetailsComponent } from './composants/details/details.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { AccueilComponent } from './composants/accueil/accueil.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:identif', component: DetailsComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'contact', 
    component: ContactComponent,
    children: [
      { path: 'form_vend', component: FormVendComponent }, 
      { path: 'form_memb', component: FormMembComponent }, 
      { path: '', redirectTo: 'form_vend', pathMatch: 'full' },
    ],
  },
  {path:'aadmin',component:AadminComponent},
  
  {path:'intadmin',component:IntadminComponent, canActivate:[authguardGuard],
  children: [
    { path: 'eventsad', component: EventsadComponent }, 
    { path: 'membread', component:MembreadComponent }, 
    { path: 'changer', component:ChangeradComponent }, 
    { path: '', redirectTo: 'eventsad', pathMatch: 'full' },
    { path: '**', component: ErreurComponent },

  ],


},
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
  { path: '**', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
