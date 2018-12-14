import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';

const routes: Routes = [
  {path:'reviewq', component:SearchExistingQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]