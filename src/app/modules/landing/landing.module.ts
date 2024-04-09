import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyComponent } from './components/why/why.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    HeroComponent,
    WhyComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class LandingModule {

 }
