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
  w: number;
  h: number;
  tooltip: any;
  link: any;
  node: any;

  topics: Array<Topic>;

  // tslint:disable-next-line:max-line-length
  constructor(private zone: NgZone, private http: HttpClient, private router: Router, private modalService: NgbModal, public authService: AuthService, private skillService: SkillserviceService) {

  }
  ngOnInit() {

    $("#graphID").ready(function () {
      return new Promise((res, rec) => {
        this.w = document.getElementById("graphID").offsetWidth;
        this.h = document.getElementById("graphID").offsetHeight;
        console.log(this.w, this.h);
      });
    });

    this.skillService.getAll().subscribe(data => {
      this.allSkills = data;
      console.log(this.allSkills);
    });

    this.skillService.getGraphData().subscribe(data => {
      this.graphData = data;
      console.log(this.graphData);
      console.log(this.w, this.h);
      this.graph(this.w, this.h);
    });
  }

  graph(w, h) {
    console.log(`w ${this.w} h ${this.h}`);
    this.tooltip = d3.select("#graphID")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    d3.json(this.graphData, function (error, graph) {
      if (error) { throw error; }
      const svg = d3.select('#graphID'),
        width = +w,
        height = +h;
      console.log(width, height);

      const simulation = d3.forceSimulation()
        .nodes(graph.nodes)
        .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))
        .on('tick', this.ticked());

      simulation.force('link')
        .links(graph.links);

      const R = 6;

      this.link = svg.selectAll('line')
        .data(graph.links)
        .enter().append('line');

      this.link
        .attr('class', 'link')
        .on('mouseover.tooltip', function (d) {
          this.tooltip.transition()
            .duration(300)
            .style("opacity", .8);
          this.tooltip.html("Source:" + d.source.id +
            "<p/>Target:" + d.target.id +
            "<p/>Strength:" + d.value)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        })
        .on("mouseout.tooltip", function () {
          this.tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        })
        .on('mouseout.fade', this.fade(1))
        .on("mousemove", function () {
          this.tooltip.style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        });;

      this.node = svg.selectAll('.node')
        .data(graph.nodes)
        .enter().append('g')
        .attr('class', 'node')
        .call(d3.drag()
          .on("start", this.dragstarted())
          .on("drag", this.dragged())
          .on("end", this.dragended()));;

      this.node.append('circle')
        .attr('r', R)
        .attr("fill", function (d) { return this.color(d.group); })
        .on('mouseover.tooltip', function (d) {
          this.tooltip.transition()
            .duration(300)
            .style("opacity", .8);
          this.tooltip.html("Name:" + d.id + "<p/>group:" + d.group)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        })
        .on('mouseover.fade', this.fade(0.1))
        .on("mouseout.tooltip", function () {
          this.tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        })
        .on('mouseout.fade', this.fade(1))
        .on("mousemove", function () {
          this.tooltip.style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        })
        .on('dblclick', this.releasenode);

      this.node.append('text')
        .attr('x', 0)
        .attr('dy', '.35em')
        .text(d => d.name);


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
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.add = false;
  }

  addSkillModel(add: boolean = true) {
    const modalRef = this.modalService.open(SkillmodalComponent);
    modalRef.componentInstance.add = add;
  }

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
    this.skillService.updateSearch($event.item).subscribe();
    this.skillService.getSkillTopper($event.item.id).subscribe(data => {
      this.toppers = data;
    });
  }

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
