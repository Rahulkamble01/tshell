import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnerLoginComponent } from './learner-login/learner-login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: "", component: LoginComponent },
{ path: "login", component: LoginComponent },
 {path:"",component:AdminSignupComponent},
 {path:'',component :SignupComponent},
 { path:"", component:LearnerLoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
