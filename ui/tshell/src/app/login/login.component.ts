import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private service: AuthService) { }

  form = new FormGroup({
    employeeId: new FormControl(
      '', [Validators.required
      ]),

    password: new FormControl(
      '', [Validators.required
      ])
  })

  ngOnInit() {
  }

  check(employeeId: string, password: string) {
    console.log("inside check");
    if (employeeId == '123' && password == '123') {
      console.log(employeeId);
      console.log(password);
      this.service.login();
      this.router.navigate(['/authenticate']);
    }
    else if (employeeId == '123456' && password == '123456') {
      console.log(employeeId);
      console.log(password);
      this.service.learnerLogin();
      this.router.navigate(['/learner-homepage']);
    }
     else if (employeeId == '654321' && password == '654321') {
      console.log(employeeId);
      console.log(password);
      this.service.login();
      this.router.navigate(['/admin-homepage']);
    }
    else {
      this.service.logout();
      this.router.navigate(['/login']);
    }
  }
}
