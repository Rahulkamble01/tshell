import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContributeQuestionService } from './contribute-question.service';
import { HttpClientModule } from '@angular/common/http'
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component'

@NgModule({
  declarations: [
    AppComponent,
    ContributeQuestionComponent,
    PreviewQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContributeQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
