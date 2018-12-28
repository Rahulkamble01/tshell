import { Component, OnInit } from '@angular/core'
import { Router } from '../../../node_modules/@angular/router';
import { SignupService } from './signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VALID } from '../../../node_modules/@angular/forms/src/model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailPattern = "^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$";
  employeeIdPattern = "^(0|[1-9][0-9]*)$";
                       
  json: any;                       
  error: any;
  status: any={
    emailExist:true,
    userIdExist:true,
    signupStatus:false,
  };
  //passwordPattern = "^([a-zA-Z0-9@*#!?]{8,12})$";

  form = new FormGroup({
    employeeId: new FormControl(
      '', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(this.employeeIdPattern)
      ]

    ),
    name: new FormControl(
      '', [Validators.required,
      Validators.maxLength(45)
    ]
    ),

    email: new FormControl(
      '', [Validators.required,
      Validators.pattern(this.emailPattern)],

    ),

    password: new FormControl(
      '', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
      ]

    ),

    confirmPassword: new FormControl(
      '', Validators.required
    ),
  })
  constructor(private router: Router, private signupService: SignupService) { }


  ngOnInit() {

  }

  signup() {
    this.json = this.form.value;

    this.signupService.signup(this.json).subscribe(
      data => {
        console.log(data);
        this.status = data;
        console.log("Email :" + data.emailExist);
        console.log("Emp Id: " + data.userIdExist);
        console.log("signup status :" + data.signupStatus)  
        this.form.reset();     
      },
      error => {
        this.error = error;
        console.log(this.error);
      }
    );


  }
}