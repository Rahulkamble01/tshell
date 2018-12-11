import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator-directive';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';


import { AdminSignupComponent } from './admin-signup/admin-signup.component';


@NgModule({
    declarations: [
        AppComponent,


        LoginComponent,

        AdminSignupComponent,

        SignupComponent,
        ConfirmEqualValidatorDirective

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        HttpClientModule





    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
