import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchExistingQuestionsComponent } from './search-existing-questions/search-existing-questions.component';
import { NgForm} from '@angular/forms';
import { ContributeQuestionComponent } from './contribute-question/contribute-question.component';
import { ContributeQuestionService } from './contribute-question.service';
import { PreviewQuestionsComponent } from './preview-questions/preview-questions.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchExistingQuestionsComponent,
    ContributeQuestionComponent,
    PreviewQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [
    ContributeQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
