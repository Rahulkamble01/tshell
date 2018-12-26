import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  role: string;
  employeeId: any;

  constructor() { }

  getEmployeeId() {
    return this.employeeId;
  }

  setEmployeeId(employeeId:any) {
    this.employeeId = employeeId;
  }

  login() {
    console.log("Inside auth service login()")
    this.loggedIn = true;
  }

  logout() {
    console.log("Inside auth service logout()")
    this.loggedIn = false;
  }

  getRole() {
    return this.role;
  }

  setRole(role: string) {
    this.role = role;
  }

}
