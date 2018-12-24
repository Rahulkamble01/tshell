import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  role: string;

  constructor() { }

  login() {
    console.log("Inside auth service login()")
    this.loggedIn = true;
  }

  logout() {
    console.log("Inside auth service logout()")
    this.loggedIn = false;
  }

  getloggedIn() {
    console.log("Inside learner auth service login()")
    return this.loggedIn;
  }

  getRole() {
    return this.role;
  }

  setRole(role:string) {
    this.role = role;
  }
}
