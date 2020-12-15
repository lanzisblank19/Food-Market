import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ViewComponent } from './view/view.component';
import { MostratingComponent } from './mostrating/mostrating.component';
import { FooterComponent } from './footer/footer.component';
import { EstablishmarketComponent } from './establishmarket/establishmarket.component';
import { MealComponent } from './meal/meal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent,
    ViewComponent,
    MostratingComponent,
    FooterComponent,
    EstablishmarketComponent,
    MealComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
