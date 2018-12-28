import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdminLoggedIn = false;
  isLearnerLoggedIn = false;
  employeeLoggedIn :any=0;
  employeeRole:any;
  constructor() { }

  login() {
    console.log("Inside auth service login()")
    this.isAdminLoggedIn = true;
  }

  logout() {
    console.log("Inside auth service logout()")
    this.isAdminLoggedIn = false;
  }

  learnerLogin() {
    console.log("Inside learner auth service login()")
    this.isLearnerLoggedIn = true;
  }

  learnerLogout() {
    console.log("Inside learner auth service logout()")
    this.isLearnerLoggedIn = false;
  }



}
