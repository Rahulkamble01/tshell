import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';


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
import { AddskillComponent } from './addskill/addskill.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { ChartsModule } from 'ng2-charts';

import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AddskillComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    AssessmenthistoryComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    RecentlyAddedSkillsComponent,
    
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
