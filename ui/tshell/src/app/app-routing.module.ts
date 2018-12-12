import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddskillComponent } from './addskill/addskill.component';


import { SignupComponent } from './signup/signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:AddskillComponent},
  { path: "login", component: LoginComponent },
  { path: "authenticate", component: AdminSignupComponent },
  { path: "signup", component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
