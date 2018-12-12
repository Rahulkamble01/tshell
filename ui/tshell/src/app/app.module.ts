import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExitAssesmentComponent } from './exit-assesment/exit-assesment.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ExitAssesmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
