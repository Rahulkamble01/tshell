import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnerLoginComponent } from './learner-login/learner-login.component';


const routes: Routes = [
      { path:"", component:LearnerLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]