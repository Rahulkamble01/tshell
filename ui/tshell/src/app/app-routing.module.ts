import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';
<<<<<<< HEAD
=======
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';
>>>>>>> rel1

const routes: Routes = [
  {path:'dash', component:DashboardComponent},
  {path:'totalquestions',component:TotalquestionComponent},
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },
  { path: "learner-homepage", component: LearnerHomepageComponent },
<<<<<<< HEAD
  { path: "assessmenthistory", component:AssessmenthistoryComponent },
=======
  { path: "assessmenthistory",component:AssessmenthistoryComponent},
  {path: "", component: RecentlyAddedSkillsComponent},
  {path: "recentSkills", component: RecentlyAddedSkillsComponent}
>>>>>>> rel1
]




<<<<<<< HEAD
=======



>>>>>>> rel1

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
