import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitAssesmentComponent } from './exit-assesment/exit-assesment.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ScoreAssesmentComponent } from './score-assesment/score-assesment.component';

const routes: Routes = [
  { path: 'assesment', component: ExitAssesmentComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'assesmentscore', component: ScoreAssesmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ExitAssesmentComponent];
