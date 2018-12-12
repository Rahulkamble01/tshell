import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSkillComponent } from './search-skill/search-skill.component';

const routes: Routes = [
  {path: '' , component:  SearchSkillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]