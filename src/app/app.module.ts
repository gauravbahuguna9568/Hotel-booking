import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component'
=======
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component'
>>>>>>> ca23e427a8c36ada630064383f0ae86b8e05fe1e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListComponent,
    SearchComponent
=======
    HomeComponent,
    SearchResultComponent,
    DetailsPageComponent,
    PaymentPageComponent,
    BookingsComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InvoiceComponent,
    ProfileComponent,
    EditComponent,
    ListComponent
>>>>>>> ca23e427a8c36ada630064383f0ae86b8e05fe1e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
