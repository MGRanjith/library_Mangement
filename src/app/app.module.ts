import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/return/return.component';
import { FormsComponent } from './forms/forms.component';
import { EditComponent } from './edit/edit.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BooksComponent } from './dashboard/books/books.component';
import { FilterComponent } from './dashboard/filter/filter.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AuthenticationComponent,
    DashboardComponent,
    CartComponent,
    FormsComponent,
    EditComponent,
    UsersdetailsComponent,
    HeaderComponent,
    TopHeaderComponent,
    BooksComponent,
    FilterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
