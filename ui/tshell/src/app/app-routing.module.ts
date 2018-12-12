import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';

const routes: Routes = [
  {path: "", component: RecentlyAddedSkillsComponent},
  {path: "recentSkills", component: RecentlyAddedSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]