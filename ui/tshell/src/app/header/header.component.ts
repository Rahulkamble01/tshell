import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validation';
import { ChangepasswordService } from '../changepassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  passwordPattern = "/^[A-Za-z]{4,20}/";

  empid: any;
  password: any;
  user: any;
  newpassword: any;
  public message: string;

  form = new FormGroup({
    oldpassword: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      PasswordValidators.cannotContainSpace
      ]),
    newpassword: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern(this.passwordPattern)]
    ),


    confirmpassword: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern(this.passwordPattern)
      ]),

  });

  constructor(public service: AuthService, private router: Router, private passwordService: ChangepasswordService) { }

  ngOnInit() {
  }

  /* 
  getData() {
    console.log("inside the getData");
    this.service.getDetails(this.empid).subscribe(
      data => {
        console.log(data);
        this.user = data;
        
      })
  }*/

  // savePassword(oldpassword: string, newpassword: string, confirmpassword: any) {
  //   if (!(oldpassword == "1234") || !(newpassword == "12345") || !(confirmpassword == "12345")) {
  //     console.log(oldpassword);
  //     this.message = "Incorrect Old Password";

  //   }
}




  /* savePassword(){

    console.log(this.form.value.confirmpassword);
    console.log(this.user.password);
    console.log(this.user.empId);
    if(this.user.password!=this.form.value.oldpassword){
      alert("Incorrect password");
      this.message = "Incorrect Old Password";
    }
    if(this.user.password==this.form.value.newpassword){
      alert("Password should not be same as old password");

    }
    if(this.form.value.newpassword != this.form.value.confirmpassword){
      alert("Enter Valid Password");
    }

    let userSave = JSON.stringify({
      id:this.user.id,
      empId: this.user.empId,
      oldPassword : this.form.value.oldpassword,
      newPassword:this.form.value.confirmpassword
    });
   


    this.service.savePassword(userSave).subscribe(
      data => {
        console.log(data);
      })
      this.router.navigate(['home']);
    } */



