import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/landing/components/home/home.component';
import { AboutComponent } from './modules/landing/components/about/about.component';
import { ServicesComponent } from './modules/landing/components/services/services.component';
import { PortfolioComponent } from './modules/landing/components/portfolio/portfolio.component';
import { TeamComponent } from './modules/landing/components/team/team.component';
import { ContactComponent } from './modules/landing/components/contact/contact.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"portfolio",
    component:PortfolioComponent
  },
  {
    path:"team",
    component:TeamComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
