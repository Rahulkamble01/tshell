import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../topic';
import { Skill } from '../skill';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  skills: Skill[] = [
    { id: 1, name: 'Java' },
  ];

  topics: Array<Topic>;

  addskillform = new FormGroup({
    skillName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(25),
      Validators.pattern(/^[a-zA-Z0-9 ._-]+$/),

      ]),
    topicName: new FormControl(
      '',
      [
        Validators.maxLength(60),
        Validators.pattern(/^[a-zA-Z ._-]+$/),
      ])
  });

  constructor(private http: HttpClient, private router: Router) {
    this.topics = [];
  }

  addTopic(topicname) {
    let topic = new Topic(topicname);
    this.topics.push(topic);
    this.clearInput();
  }



  removeTopic(topic) {
    let index = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
  }

  get topicName(): any { return this.addskillform.get('topicName'); }
  clearInput() { this.topicName.reset(); }

  submitSkill(skillName) {
    if (skillName == this.skills[0].name) {
      alert("Skill already exists");
    }

    else {
      alert("Skill Added");

    }
  }


  ngOnInit() {


  }


}
