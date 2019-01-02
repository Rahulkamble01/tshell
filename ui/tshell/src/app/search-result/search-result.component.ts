import { Component, OnInit, ViewChild, Input, PlatformRef, NgZone } from '@angular/core';
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
import { EditskillmodalComponent } from '../editskillmodal/editskillmodal.component';
import { ForceLink } from 'd3';


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
  toppers: any[] = [];
  graphData: any[] = [];
  topics: Array<Topic>;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, public authService: AuthService, private skillService: SkillserviceService) {

  }
  ngOnInit() {
    this.skillService.getAll().subscribe(data => {
      this.allSkills = data;
      console.log(this.allSkills);
      // const data1 = $("#graphID").ready(function () {
      //   return new Promise((res, rec) => {
      //     this.w = document.getElementById("graphID").offsetWidth;
      //     this.h = document.getElementById("graphID").offsetHeight;
      //   });
      // });
      // this.w = data1[0].offsetWidth;
      // this.h = data1[0].offsetHeight;
      // console.log(this.w, this.h);
      // abc(this.w, this.h);
    });

    // this.skillService.getGraphData().subscribe(data => {
    //   this.graphData = data;
    // });
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
    const modalRef = this.modalService.open(EditskillmodalComponent);
    modalRef.componentInstance.item = item;
  }

  addSkillModel() {
    const modalRef = this.modalService.open(SkillmodalComponent);
  }

  formatter = (x: { name: string }) => x.name;
  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(100),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : this.allSkills.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 100)
    )
  )
  itemSelected($event) {
    this.skills = $event.item;
    this.name = $event.item.name;
    this.skillService.updateSearch($event.item).subscribe();
    this.skillService.getSkillTopper($event.item.id).subscribe(data => {
      this.toppers = data;
      console.log(data);
    });
    // this.skillService.getGraphDataOfSkill($event.item.name).subscribe(data => {
    //   this.graphData = data;
    // });
  }

}

export interface Graph123 {
  links: any[];
  nodes: any[];
}


// const tooltip = d3.select("#graphID")
// .append("div")
// .attr("class", "tooltip")
// .style("opacity", 0);

// d3.json(this.graphData, function (error, graph) {
// if (error) { throw error; }
// const svg = d3.select('svg'),
//   width = +svg.attr('width'),
//   height = +svg.attr('height');

// const simulation = d3.forceSimulation()
//   .nodes(graph.nodes)
//   .force('link', d3.forceLink().id(d => d.id))
//   .force('charge', d3.forceManyBody())
//   .force('center', d3.forceCenter(width / 2, height / 2))
//   .on('tick', ticked());

// simulation.force('link')
//   .links(graph.links);

// const R = 6;


// });
