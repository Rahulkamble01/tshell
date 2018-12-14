import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component';

const routes: Routes = [
  {path:'reviewq', component:SearchExistingQuestionsComponent},
  { path: 'contributeQuestion', component: ContributeQuestionComponent },
  { path:'preview', component: PreviewQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = []