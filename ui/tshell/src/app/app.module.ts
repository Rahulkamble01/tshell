import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerLoginComponent } from './learner-login/learner-login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    LearnerLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
