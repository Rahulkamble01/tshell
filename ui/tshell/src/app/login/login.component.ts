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
    name: new FormControl(
      '', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
      ]),

    password: new FormControl(
      '', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8)
      ])
  })

  ngOnInit() {
  }

  check(name: string, password: string) {
    console.log("inside check");
    if (name == 'abc' && password == '123') {
      console.log(name);
      console.log(password);
      this.service.login();
      //this.router.navigate(['/authenticate']);
    }
    else {
      this.service.logout();
      this.router.navigate(['/login']);
    }
  }
}
