import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../app/home/home.component";
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from "../app/signup/signup.component";
import { ViewComponent } from './view/view.component';
import { MostratingComponent } from './mostrating/mostrating.component';
import { FooterComponent } from './footer/footer.component';
import { EstablishmarketComponent } from './establishmarket/establishmarket.component';
import { MealComponent } from './meal/meal.component';


const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
{
  path: 'header',
  component: HeaderComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'view',
  component: ViewComponent
},
{
  path: 'mostrating',
  component: MostratingComponent
},
{
 path: 'footer',
 component: FooterComponent
},
{
  path: 'establishmarket',
  component: EstablishmarketComponent
},
{
  path: 'meal',
  component: MealComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
