import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component';
const routes: Routes = [
  { path: '', component: ContributeQuestionComponent },
  { path:'preview', component: PreviewQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = []