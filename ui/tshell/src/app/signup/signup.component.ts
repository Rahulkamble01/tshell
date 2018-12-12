import { Component, OnInit } from '@angular/core'
import { Router } from '../../../node_modules/@angular/router';
import { SignupService } from './signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VALID } from '../../../node_modules/@angular/forms/src/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //passwordPattern = "^([a-zA-Z0-9@*#!?]{8,12})$";

  form = new FormGroup({
    empId : new FormControl(
      '',[
        Validators.required,
        Validators.minLength(6),
         Validators.maxLength(10)
      ]
     
    ),
    username : new FormControl(
      '', Validators.required
    ),

    email : new FormControl(
      '',[ Validators.required,
      Validators.pattern(this.emailPattern)]
    ),

    password : new FormControl(
      '', [Validators.required,

        Validators.minLength(6),
         Validators.maxLength(30)
     ]

    
    ),

    confirmPassword : new FormControl(
      '', Validators.required
    ),
  })
  constructor(private router:Router,private signupService:SignupService ) { }

  ngOnInit() {
    console.log(this.form);
  }
signup(employeeId:string,name:string,email:string,password:string,confirmpassword:string){
 
  
   let json = JSON.stringify({
    employeeId:employeeId,
    name:name,
    email: email,
    password: password,
   confirmpassword:confirmpassword
  });

  this.signupService.signup(json).subscribe(
    data => {
      console.log(data)
     
      // this.signupService.signup(data);
        this.router.navigate(['login']);
       
    }
  ); 
}
}
