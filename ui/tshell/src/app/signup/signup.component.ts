import { Component, OnInit } from '@angular/core'
import { Router } from '../../../node_modules/@angular/router';
import { SignupService } from './signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form = new FormGroup({
    empId : new FormControl(
      '', Validators.required
      
    ),
    username : new FormControl(
      '', Validators.required
    ),

    email : new FormControl(
      '', Validators.required
    ),

    password : new FormControl(
      '', Validators.required
    ),

    confirmPassword : new FormControl(
      '', Validators.required
    ),
  })
  constructor(private router:Router,private signupService:SignupService ) { }

  ngOnInit() {
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
