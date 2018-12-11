import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitAssesmentComponent } from './exit-assesment/exit-assesment.component';

const routes: Routes = [
  { path: '', component: ExitAssesmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ExitAssesmentComponent];
