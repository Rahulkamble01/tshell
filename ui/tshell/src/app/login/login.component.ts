import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
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

  error = false;
  numberPattern = "^[0-9]{6}$";
  message: string;
  resendmessage:string;
  status: boolean = false;
  formStatus: boolean = false;
  employeeId: number;
  otpStatus: boolean = false;
  resetStatus: boolean = false;
  constructor(private router: Router, public service: AuthService, public forgotpasswordservice: ForgotpasswordService) { }

  form = new FormGroup({
    employeeId: new FormControl(
      '', [Validators.required
      ]),

    password: new FormControl(
      '', [Validators.required
      ])
  });

  resetRequestForm = new FormGroup({
    employeeid: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(6),
     Validators.maxLength(10),
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
    console.log("inside check");
    if (employeeId == '123' && password == '123') {
      console.log(employeeId);
      console.log(password);
      this.service.login();
      this.router.navigate(['/authenticate']);
    } else if (employeeId == '123456' && password == '123456') {
      console.log(employeeId);
      console.log(password);
      this.service.learnerLogin();
      /*   this.router.navigate(['/assessmenthistory']); */
      this.router.navigate(['/dash']);
      /*   this.router.navigate(['/learner-homepage']); */
    } else if (employeeId == '654321' && password == '654321') {
      console.log(employeeId);
      console.log(password);
      this.service.login();
      this.router.navigate(['/admin-homepage']);
    } else {
      this.service.logout();
      this.router.navigate(['/login']);
    }
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
      },
      error => {
        this.error = true;
      }
    );
    
    
  }



  resendOtp() {
    this.forgotpasswordservice.requestPasswordReset(this.employeeId).subscribe(
      data => {
        console.log(data);
        if (data == true) {
          alert("OTP resent successfully");
          this.status = true;
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
    this.resetRequestForm.reset();
    this.otpform.reset();
    this.resetform.reset();
    this.error = false;
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
          alert("Password changed successfully");
        }
        else {
          this.message = "issue in seting the password"
        }
      }
    );
  }
}
