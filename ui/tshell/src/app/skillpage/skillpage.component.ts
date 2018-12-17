<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
>>>>>>> neoskills

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.css']
})
export class SkillpageComponent implements OnInit {
<<<<<<< HEAD

  skills: string = 'SQL';
  top5: any = [
    {
      score: 90,
      user: { name: 'Arisankar M' }
    },
    {
      score: 80,
      user: { name: 'Joseph Vijay' }
    },
    {
      score: 70,
      user: { name: 'Vijay Kumar' }
=======
  skills: any = {
    id: null,
    name: '',
    active: null,
    top3: [
      {
        score: null,
        user: { id: null, name: '' }
      },
      {
        score: null,
        user: { id: null, name: '' }
      },
      {
        score: null,
        user: { id: null, name: '' }
      }]
  };
  toppers: any = [
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
>>>>>>> neoskills
    },
    {
      score: 60,
      user: { name: 'Sundar' }
    },
    {
      score: 50,
      user: { name: 'Arun Kumar' }
    }
  ];
<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  constructor(private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skills = params;
      console.log(JSON.stringify(this.skills.top3));
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

  // editSkillModel(item) {
  //   const modalRef = this.modalService.open(SkillmodalComponent);
  //   this.skills.forEach(element => {
  //     if (element.id == item.id) {
  //       modalRef.componentInstance.item = element;
  //       // alert(JSON.stringify(element));
  //       modalRef.componentInstance.add = false;
  //     }
  //   });

  // }

>>>>>>> neoskills
}
