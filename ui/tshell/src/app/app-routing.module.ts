import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostSearchedSkillsComponent } from './most-searched-skills/most-searched-skills.component';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'totalquestions',component:TotalquestionComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]