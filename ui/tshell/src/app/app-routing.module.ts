import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddskillComponent } from './addskill/addskill.component';


const routes: Routes = [
  {path:"", component:AddskillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
