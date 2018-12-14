import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddskillComponent } from './addskill/addskill.component';
import { SkillpageComponent } from './skillpage/skillpage.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },
  { path: "learner-homepage", component: LearnerHomepageComponent },
  { path: "skills", component: SearchResultComponent },
  { path: "addskill", component: AddskillComponent },
  { path: "skillpage", component: SkillpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
