import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdminLoggedIn = false;

  constructor() { }

  login() {
    console.log("Inside auth service login()")
    this.isAdminLoggedIn = true;
  }

  logout() {
    console.log("Inside auth service logout()")
    this.isAdminLoggedIn = false;
  }
} 