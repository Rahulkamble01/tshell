import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  message: string;
  notice: string;

  form = new FormGroup({
    newpassword : new FormControl(
      '', Validators.required
    ),

    confirmPassword : new FormControl(
      '', Validators.required
    ),
  })
  status: boolean=false;

  constructor(private resetService: ResetService) { }

  ngOnInit() {
  }
  // reset(employeeId: number, newPassword: string) {
  //   let json = JSON.stringify({
  //     employeeId: employeeId,
  //     newPassword: newPassword
  //   });
  //   this.resetService.reset(json)
  //     .subscribe(data => {
  //       console.log(data)

  //       if (data.reseted) {
  //         this.message = "password has been reset";
  //       }
  //       else {
  //         this.message = "error in reseting the password";
  //       }
  //     }
  //     );
  // }

  change() {
   this.status=true;
      this.notice = "Reset password is done";
  
      }
}
