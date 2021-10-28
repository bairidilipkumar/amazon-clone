import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import {HeaderComponent} from './COMPONENTS/header/header.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component'
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    SignupComponent,
    MobilesComponent,
    ElectronicsComponent,
    FashionComponent,
    ComputersComponent,
    TodaydealComponent,
    HomekComponent,
    BestsComponent,
    LastComponent,
    LastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
