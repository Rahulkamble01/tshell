import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-learner-login',
  templateUrl: './learner-login.component.html',
  styleUrls: ['./learner-login.component.css']
})
export class LearnerLoginComponent implements OnInit {

  form = new FormGroup({
    employeeId: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),


    password: new FormControl('',
      [
        Validators.required,
      ]),
  })

  constructor() { }

  ngOnInit() {
  }

}
