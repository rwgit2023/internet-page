import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanosComponent } from './planos/planos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
