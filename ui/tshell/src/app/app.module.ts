import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminSignupComponent } from './admin-signup/admin-signup.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    AdminSignupComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
