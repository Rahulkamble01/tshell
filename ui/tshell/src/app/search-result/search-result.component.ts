import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import * as d3 from 'd3';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
import { AuthService } from '../auth.service';

declare var abc: any;

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchSkillByName:any;
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

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, public authService: AuthService) {
    this.topics = [];
  }

  ngOnInit() {
    $("#graphID").ready(function () {
      console.log("inside abc");
      var w = document.getElementById("graphID").offsetWidth;
      var h = document.getElementById("graphID").offsetHeight;
      abc(d3, w, h);
    });
  }

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