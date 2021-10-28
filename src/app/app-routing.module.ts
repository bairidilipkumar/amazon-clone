import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { ComputersComponent } from './computers/computers.component';
import { TodaydealComponent } from './todaydeal/todaydeal.component';
import { HomekComponent } from './homek/homek.component';
import { BestsComponent } from './bests/bests.component';
import { LastComponent } from './last/last.component';
import { LastsComponent } from './lasts/lasts.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'checkout', component: CheckoutComponent},
  {path:'signup',component:SignupComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},
  {path:'computers',component:ComputersComponent},
  {path:'todaydeal',component:TodaydealComponent},
  {path:'homek',component:HomekComponent},
  {path:'bests',component:BestsComponent},
  {path:'last',component:LastComponent},
  {path:'lasts',component:LastsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
