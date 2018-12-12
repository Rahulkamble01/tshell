import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalquestionComponent } from './totalquestion/totalquestion.component';

const routes: Routes = [
 {path:'totalquestions',component:TotalquestionComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ ]