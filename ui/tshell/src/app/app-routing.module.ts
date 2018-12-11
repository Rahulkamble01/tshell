import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmenthistoryComponent } from './assessmenthistory/assessmenthistory.component';

const routes: Routes = [
   {path:"",component:AssessmenthistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]