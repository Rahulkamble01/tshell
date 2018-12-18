import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { NgForm} from '@angular/forms';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { ContributeQuestionService } from './contribute-question.service';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component'
import { TotalquestionComponent } from './totalquestion/totalquestion.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator-directive';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { ChartsModule } from 'ng2-charts';

import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';
import { CountOfQuestionsToReviewComponent } from './count-of-questions-to-review/count-of-questions-to-review.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchExistingQuestionsComponent,
    ContributeQuestionComponent,
    PreviewQuestionsComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    RecentlyAddedSkillsComponent,
    HeaderComponent,
    LoginComponent,
    AdminSignupComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    LearnerHomepageComponent,
    CountOfQuestionsToReviewComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
    
    
  ],
  providers: [
    ContributeQuestionService,AuthService
  ],
   
  bootstrap: [AppComponent]

})
export class AppModule { }
