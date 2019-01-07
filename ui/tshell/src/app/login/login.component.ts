import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from 'src/app/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ForgotpasswordService } from '../forgotpassword.service';
import { Md5 } from "md5-typescript";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  numberPattern = "^[0-9]{6}$";
  message: string;
  resendmessage:string;
  status: boolean = false;
  error: any;
  success = true;
  employeeIdPattern = "^(0|[1-9][0-9]*)$";


  formStatus: boolean = false;
  employeeId: number;
  otpStatus: boolean = false;
  resetStatus: boolean = false;
  constructor(private router: Router, public service: AuthService, public forgotpasswordservice: ForgotpasswordService, private loginService: LoginService) { }

  form = new FormGroup({
    employeeId: new FormControl(
      '', [Validators.required,
      Validators.pattern(this.employeeIdPattern)
      ]),

    password: new FormControl(
      '', [Validators.required
      ])
  });

  forms = new FormGroup({
    employeeid: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.numberPattern)
      ]

    )
  });
  resetform = new FormGroup({
    newpassword: new FormControl(
      '', [Validators.required,
        Validators.minLength(6),
         Validators.maxLength(30)
     ]
    ),

    confirmPassword: new FormControl(
      '', [Validators.required,
        Validators.minLength(6),
         Validators.maxLength(30)
     ]
    ),
  })

  otpform = new FormGroup({
    otp: new FormControl(
      '',
      [Validators.required,
      Validators.pattern(this.numberPattern)
      ]

    )
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
        console.log("incoming Data: " + data.authenticated)
        if (data.authenticated) {
          this.service.login();
          this.service.setRole(data.user.role.name);
          this.service.setEmployeeId(data.user.employeeId);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.success = false;
          this.error = false;

        }
      },
        error => {
          this.error = error;
          this.success = true;
          console.log(this.error);
        }
      );
  }


  sendMail() {
    console.log('This is check!');
    this.message = "Mail sent";
    this.status = true;
  }
  requestPasswordReset(employeeid) {
    this.employeeId = employeeid;
    this.forgotpasswordservice.requestPasswordReset(employeeid).subscribe(
      data => {
        console.log(data);
        if (data == true) {
          this.status = true;
        }
        else{
          this.message="User doesn't exists"
        }
      }
    );
  }



  resendOtp() {
    this.forgotpasswordservice.requestPasswordReset(this.employeeId).subscribe(
      data => {
        console.log(data);
        if (data == true) {
          this.status = true;
          this.resendmessage="OTP resent successfully"
          this.message="";
          this.otpform.reset();
        }
      }
    );
  }

  close() {
    this.message = "";
    this.resendmessage="";
    this.status = false;
    this.resetStatus = false;
    this.otpStatus = false;
    this.forms.reset();
    this.otpform.reset();
    this.resetform.reset();
  }
  submitOtp() {
    console.log(this.employeeId);
    let e = Md5.init(this.otpform.value.otp);
    this.forgotpasswordservice.submitOtp(this.employeeId, e).subscribe(
      data => {
        console.log(data);
        if (data == true) {
          this.message = "";
          this.status = true;
          this.otpStatus = true;
        }
        else {
          this.message = "OTP is incorrect or expried"
        }
      }
    );
  }
  resetPassword() {

    let encryptedPassword = Md5.init(this.resetform.value.newpassword);
    this.forgotpasswordservice.resetPassword(this.employeeId, encryptedPassword).subscribe(
      data => {
        console.log(data);
        if (data == true) {
          this.status = true;
          this.resetStatus = true;
          this.message = "";
        }
        else {
          this.message = "issue in seting the password"
        }
      }
    );
  }

}

