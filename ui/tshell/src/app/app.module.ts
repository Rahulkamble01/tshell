import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator-directive';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HeaderComponent } from './header/header.component';
import { LearnerHomepageComponent } from './learner-homepage/learner-homepage.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent, NgbdModalContentComponent } from './search-result/search-result.component';
import { AddskillComponent } from './addskill/addskill.component';
import { SkillpageComponent } from './skillpage/skillpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminSignupComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    HeaderComponent,
    LearnerHomepageComponent,
    HomeComponent,
    SearchResultComponent,
    AddskillComponent,
    NgbdModalContentComponent,
    SkillpageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthService],
  entryComponents: [NgbdModalContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
