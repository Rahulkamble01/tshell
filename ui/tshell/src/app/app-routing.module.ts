import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },
  { path: "learner-homepage", component: LearnerHomepageComponent },
  { path: "reset", component: ResetPasswordComponent },
  { path: "admin-homepage", component: AdminHomepageComponent },
  { path: "changepassword", component: ChangepasswordComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
