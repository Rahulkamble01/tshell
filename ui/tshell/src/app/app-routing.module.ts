import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddskillComponent } from './addskill/addskill.component';
import { SearchSkillComponent } from './search-skill/search-skill.component';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';
import { ViewlearnerComponent } from './viewlearner/viewlearner.component';
import { CountOfQuestionsToReviewComponent } from './count-of-questions-to-review/count-of-questions-to-review.component';

const routes: Routes = [
  { path: "addskill", component: AddskillComponent },
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'totalquestions', component: TotalquestionComponent },
  { path: 'search-skill', component: SearchSkillComponent },
  { path: 'totalquestions', component: TotalquestionComponent },
  { path: 'reviewq', component: SearchExistingQuestionsComponent },
  { path: 'contributeQuestion', component: ContributeQuestionComponent },
  { path: 'preview', component: PreviewQuestionsComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'totalquestions', component: TotalquestionComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },
  { path: "learner-homepage", component: LearnerHomepageComponent },
  { path: "reset", component: ResetPasswordComponent },
  { path: "admin-homepage", component: AdminHomepageComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  { path: "userprofile", component: UserprofileComponent },
  { path: "assessmenthistory", component: AssessmenthistoryComponent },
  { path: "recentSkills", component: RecentlyAddedSkillsComponent },
  { path: "viewprofile", component: ViewlearnerComponent },
  { path: "recentSkills", component: RecentlyAddedSkillsComponent },
  { path: "questions", component: CountOfQuestionsToReviewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
