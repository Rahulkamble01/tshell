import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdminLoggedIn = true;
  isLearnerLoggedIn = false;

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
    console.log("Inside auth service login()")
    this.isLearnerLoggedIn = true;
  }

  learnerLogout() {
    console.log("Inside auth service logout()")
    this.isLearnerLoggedIn = false;
  }



} 