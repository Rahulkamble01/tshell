import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {


  addskillform = new FormGroup({
    skillName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(10),
      
      ]),
    topicName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)]),
  });

  constructor(private http: HttpClient, private router: Router) { }

  


  ngOnInit() {
    
    
  }
 
 
}
