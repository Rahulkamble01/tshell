import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  neo4jData: any = { "links": [{ "source": 0, "target": 1 }, { "source": 2, "target": 3 }, { "source": 2, "target": 4 }, { "source": 4, "target": 5 }, { "source": 6, "target": 7 }, { "source": 1, "target": 9 }, { "source": 8, "target": 9 }, { "source": 9, "target": 10 }, { "source": 8, "target": 10 }, { "source": 1, "target": 10 }, { "source": 13, "target": 12 }, { "source": 11, "target": 12 }, { "source": 14, "target": 12 }, { "source": 15, "target": 12 }, { "source": 16, "target": 12 }], "nodes": [{ "name": "C", "label": "skill" }, { "name": "Java", "label": "skill" }, { "name": "HTML", "label": "skill" }, { "name": "CSS", "label": "skill" }, { "name": "JavaScript", "label": "skill" }, { "name": "TypeSkript", "label": "skill" }, { "name": "MySQL", "label": "skill" }, { "name": "MySQL_Workbench", "label": "skill" }, { "name": "Spring", "label": "skill" }, { "name": "SpringBoot", "label": "skill" }, { "name": "SpringMVC", "label": "skill" }, { "name": "Microsoft Office Paint", "label": "skill" }, { "name": "Microsoft Office", "label": "skill" }, { "name": "Microsoft Office Powerpoint", "label": "skill" }, { "name": "Microsoft Office Word", "label": "skill" }, { "name": "Microsoft Office Excel", "label": "skill" }, { "name": "Microsoft Office Access", "label": "skill" }, { "name": "Microsoft Office Powerpoint", "label": "skill" }, { "name": "Microsoft Office Word", "label": "skill" }, { "name": "Microsoft Office Excel", "label": "skill" }, { "name": "Microsoft Office Access", "label": "skill" }] }

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

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) {
    this.topics = [];
  }

  ngOnInit() {
  }

  // addTopic(topicname) {
  //   let topic = new Topic(topicname);
  //   this.topics.push(topic);
  //   this.clearInput();
  // }
  // removeTopic(topic) {
  //   let index = this.topics.indexOf(topic);
  //   this.topics.splice(index, 1);
  // }

  // get topicName(): any { return this.addskillform.get('topicName'); }
  // clearInput() { this.topicName.reset(); }

  // submitSkill(skillName) {
  //   if (skillName == this.skills[0].name) {
  //     alert("Skill already exists");
  //   } else {
  //     alert("Skill Added");

  //   }
  // }

  toggllingSkill(skill) {
    if (skill.active) {
      if (confirm("do you want to deactivate " + skill.name + " ?")) {
        return skill.active = false;
      } else {
        return;
      }
    } else {
      if (confirm("do you want to activate " + skill.name + " ?")) {
        return skill.active = true;
      } else {
        return;
      }
    }
  }

  editSkillModel(item) {
    console.log(item);
    const modalRef = this.modalService.open(SkillmodalComponent);
    this.skills.forEach(element => {
      if (element.id == item.id) {
        modalRef.componentInstance.item = element;
        // alert(JSON.stringify(modalRef.componentInstance.item));
      }
    });
    modalRef.componentInstance.name = item.name;
    modalRef.componentInstance.add = false;
  }

  addSkillModel(add: boolean = true) {
    const modalRef = this.modalService.open(SkillmodalComponent);
    modalRef.componentInstance.add = add;
  }

}
