import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
  {path:"",component:AdminSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]