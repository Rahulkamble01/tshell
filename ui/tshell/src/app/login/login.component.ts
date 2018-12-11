import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  check(name: string, password: string) {
    console.log("inside check");
    if (name == 'abc' && password == '123') {
      console.log(name);
      console.log(password);
      this.router.navigate(['/home']);
    }
    else {
      this.router.navigate(['/authenticate']);
    }
  }
}
