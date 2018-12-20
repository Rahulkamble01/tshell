import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import * as d3 from 'd3';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
import { AuthService } from '../auth.service';
import { Skill } from '../skill';
import { SkillserviceService } from '../skillservice.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


declare var abc: any;

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  name: any;
  model: any;
  skills: any = [];
  allSkills: Skill[] = [];

  topics: Array<Topic>;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, public authService: AuthService, private skillService: SkillserviceService) {
    this.topics = [];

    $("#graphID").ready(function () {
      console.log("inside abc");
      var w = document.getElementById("graphID").offsetWidth;
      var h = document.getElementById("graphID").offsetHeight;
      abc(d3, w, h);
    });
  }
  ngOnInit() {
    this.skillService.getAll().subscribe(data => {
      this.allSkills = data;
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

  // formatter = (result: string) => result.toUpperCase();
  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(100),
  //     distinctUntilChanged(),
  //     map(term => term === '' ? []
  //       : this.skillNameArray.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
  //     ),

  //   )
  formatter = (x: { name: string }) => x.name;
  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(100),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : this.allSkills.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 10)
    )
  )
  itemSelected($event) {
    this.skills = $event.item;
    this.name = $event.item.name;
    console.log(this.skills);
  }
}


