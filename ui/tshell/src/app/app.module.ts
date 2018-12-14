import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './top5AccessedTest/test.component';
import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';
import { SearchSkillComponent } from './search-skill/search-skill.component';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { NgForm } from '@angular/forms';
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
import { HeaderComponent } from './header/header.component';
import { AddskillComponent } from './addskill/addskill.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { QuestiongraphComponent } from './questiongraph/questiongraph.component';
import { ChartsModule } from 'ng2-charts';
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';
import { ViewlearnerComponent } from './viewlearner/viewlearner.component';
import { CountOfQuestionsToReviewComponent } from './count-of-questions-to-review/count-of-questions-to-review.component';

@NgModule({
  declarations: [
    AppComponent,
  TestComponent,
    AddskillComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    AssessmenthistoryComponent,
    SearchSkillComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    RecentlyAddedSkillsComponent,
    LoginComponent,
    AdminSignupComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    HeaderComponent,
    ResetPasswordComponent,
    LearnerHomepageComponent,
    AdminHomepageComponent,
    ChangepasswordComponent,
    UserprofileComponent,
    ViewlearnerComponent,
    AppComponent,
    SearchExistingQuestionsComponent,
    ContributeQuestionComponent,
    PreviewQuestionsComponent,
    DashboardComponent,
    HeaderComponent,
    MostSearchedSkillsComponent,
    TotalquestionComponent,
    RecentlyAddedSkillsComponent,
    LoginComponent,
    AdminSignupComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    LearnerHomepageComponent,
    CountOfQuestionsToReviewComponent,
    TotalquestionComponent,
    QuestiongraphComponent,
    UserprofileComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    ContributeQuestionService, AuthService
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
