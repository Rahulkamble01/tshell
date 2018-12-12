import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';

import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator-directive';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HeaderComponent } from './header/header.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    
    LoginComponent,
    AdminSignupComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    HeaderComponent,
    LearnerHomepageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
