import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';
import { SearchSkillComponent } from './search-skill/search-skill.component';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { ContributeQuestionService } from './contribute-question.service';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator-directive';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HeaderComponent } from './header/header.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChartsModule } from 'ng2-charts';
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';
import { ViewlearnerComponent } from './viewlearner/viewlearner.component';
import { CountOfQuestionsToReviewComponent } from './count-of-questions-to-review/count-of-questions-to-review.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddskillComponent } from './addskill/addskill.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { QuestiongraphComponent } from './questiongraph/questiongraph.component';

 import { ExitAssesmentComponent } from './exit-assesment/exit-assesment.component';
 import { InstructionComponent } from './instruction/instruction.component';
import { ScoreAssesmentComponent } from './score-assesment/score-assesment.component';
import { SkillmodalComponent } from './skillmodal/skillmodal.component';
import { PasswordMachingValidatorDirective } from './header/password-matching-validator.directive';
import { PasswordNotEqualValidatorDirective } from './header/password-not-equal-validator.directive';
import { FooterComponent } from './footer/footer.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ErrorComponent } from './error/error.component';
import { TopAccessedTestsComponent } from './top-accessed-tests/top-accessed-tests.component';


@NgModule({
  declarations: [
    AppComponent,
PasswordMachingValidatorDirective,
PasswordNotEqualValidatorDirective,

    AddskillComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    AssessmenthistoryComponent,
    SearchSkillComponent,
    SkillmodalComponent,
    DashboardComponent,
    MostSearchedSkillsComponent,
    
    
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
    SearchExistingQuestionsComponent,
    ContributeQuestionComponent,
    PreviewQuestionsComponent,
    CountOfQuestionsToReviewComponent,
    HomeComponent,
    SearchResultComponent,
    AddskillComponent,
    QuestiongraphComponent,
 
     ExitAssesmentComponent,
     InstructionComponent,
     TopAccessedTestsComponent,
     ScoreAssesmentComponent,
    SkillpageComponent,
    SkillmodalComponent,
    FooterComponent,
    AddQuestionComponent,
    ErrorComponent
 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ContributeQuestionService,
    AuthService,
    HttpClientModule,
  ],
  entryComponents: [SkillmodalComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
