import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentlyAddedSkillsComponent } from './recently-added-skills/recently-added-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedSkillsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
