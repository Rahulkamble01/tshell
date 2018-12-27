import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from 'src/app/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  status: boolean = false;
  error:any;
  success=true;
  constructor(private router: Router, public service: AuthService,
    public loginService: LoginService) { }

  form = new FormGroup({
    employeeId: new FormControl(
      '', [Validators.required
      ]),

    password: new FormControl(
      '', [Validators.required
      ])
  });

  forms = new FormGroup({
    employeeid: new FormControl(
      '',
      Validators.required
    ),
    email: new FormControl(
      '',
      Validators.required
    ),


  });

  ngOnInit() {
  }

  check(employeeId: string, password: string) {
    console.log("Inside check() function");
    let json = JSON.stringify({
      employeeId: employeeId,
      password: password
    });
    console.log(json);
    this.loginService.authenticateUser(json)
      .subscribe(data => {
        console.log("incoming Data: "+data)
        console.log("User Name: "+data.user.role.name)
        if (data.authenticated) {
          this.service.login();
          this.service.setRole(data.user.role.name);
          this.service.setEmployeeId(data.user.employeeId);
          this.router.navigate(['/dash']);
        }
        else {
          this.success=false;
          this.error=false;
          
        }
      },
      error => {
        this.error=error;
        this.success=true;
        console.log(this.error);
      }
      );
  }


  sendMail() {
    console.log('This is check!');
    this.message = "Mail sent";
    this.status = true;
  }
  close() {
    this.message = "";
  }

}
