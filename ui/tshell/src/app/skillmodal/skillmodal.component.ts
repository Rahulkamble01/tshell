import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';
import { SkillserviceService } from '../skillservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skillmodal',
  templateUrl: './skillmodal.component.html',
  styleUrls: ['./skillmodal.component.css']
})
export class SkillmodalComponent implements OnInit {
  add: boolean;
  item: any;
  sam:any;
  json:any;
  expression: any;
  @Input() name: any;
  skills: any = [
    {
      id: 1,
      name: 'SQL',
      active: true,
      top3: [
        {
          score: 90,
          user: { id: 1, name: 'Arisankar M' }
        },
        {
          score: 80,
          user: { id: 2, name: 'Joseph Vijay' }
        },
        {
          score: 70,
          user: { id: 3, name: 'Vijay Kumar' }
        }
      ]
    }, {
      id: 2,
      name: 'HTML',
      active: false,
      top3: [
        {
          score: 90,
          user: { id: 1, name: 'Arisankar M' }
        },
        {
          score: 80,
          user: { id: 2, name: 'Joseph Vijay' }
        },
        {
          score: 70,
          user: { id: 3, name: 'Vijay Kumar' }
        }
      ]
    }];
  topics: Array<Topic> = [];
  constructor(public activeModal: NgbActiveModal, private SkillService : SkillserviceService) { }

  addskillform = new FormGroup
  ({
    
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
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern(/^[a-zA-Z ._-]+$/),
      ])
    
  });
  
 

  addTopic(topicname) {

    const topic = new Topic(topicname);
    // alert(JSON.stringify(topic.name));
    this.topics.push(topic);
    this.clearInput();
  }
  removeTopic(topic) {
    const index = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
  }

  get topicName(): any { return this.addskillform.get('topicName'); }
  clearInput() { this.topicName.reset(); }

  showTopic(){
    for(let topic of this.topics){
      alert(topic.name);
    }

  }

/* 
  submitSkill(skillName) {
    if (skillName == this.skills[0].name) {
      alert("Skill already updated");
    } else {
      alert("Skill Added");

    }
  }
 */
  addSkill(){
console.log("inside method");
let topics=[];
    for(let i=0;i< this.topics.length;i++){
     let json = JSON.stringify({      
     name: this.topics[i].name,
     skill:{
       name: this.addskillform.controls['skillName'].value,
     }     
    });
    
    topics[i]=json;
    

    //this.SkillService.addSkill(this.json).subscribe();
  


  }
  console.log(topics);
  }


  ngOnInit() {
    if (this.add == false) {

    }
  }

}
