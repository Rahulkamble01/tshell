import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../topic';




@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {


  topics: Array<Topic>;

  constructor(private http: HttpClient, private router: Router ) { 
    this.topics = [];
  }

addTopic(topicname){
  let topic = new Topic(topicname);
  this.topics.push(topic);
}



removeTopic(topic){
  let index = this.topics.indexOf(topic);
  this.topics.splice(index,1);
}

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

 

  


  ngOnInit() {
    
    
  }
 
 
}
