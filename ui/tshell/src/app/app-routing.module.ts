import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';

const routes: Routes = [
  { path: '', component: ContributeQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = []