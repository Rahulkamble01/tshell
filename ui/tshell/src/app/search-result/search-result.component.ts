import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
<<<<<<< HEAD
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ngbd-modal-content',
  template: `
  <div class="modal-dialog modal-lg">
  <form [formGroup]="addskillform">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4>
          Edit {{name}}
        </h4>
        <hr>
        <button type="button" class="close" data-dismiss="modal"> <i class="fa fa-times"></i></button>
      </div>
      <div class="modal-body">

        <div class="container ">

          <!-- starting of a row -->
          <div class="row">
            <div class="col-lg-4"> Name </div>
            <div class="col-lg-5"> </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-2"></div>
          </div> <!-- ending of a row -->


          <!-- starting of a row -->
          <div class="row">

            <div class="col-lg-12">

              <input type="text" class="form-control" formControlName="skillName" placeholder="Enter a Name"
                #skillName value="{{name}}">
            </div>

          </div> <!-- ending of a row -->

          <br>
          <!-- starting of a row -->
          <div class="row">
            <div class="col-lg-12"> Add Topics </div>
          </div> <!-- ending of a row -->



          <div class="row ">

            <div class="col-lg-12 col-12 col-sm-12 col-md-12 buttonInside ">
              <span class="itwillflex">
                <input type="text" class="form-control topicinput" formControlName="topicName" #topicname placeholder="Enter sub-topic and click + to add it">
                <button id="erase" (click)="addTopic(topicname.value)" class=" btn btn-info btn-sm fa fa-plus"></button>
              </span>

            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">

              <ul *ngFor="let topic of topics" class="list-inline marginzero" style="display:inline-block">
                <li class="badge badge-primary litopic">{{topic.name}} &nbsp; <i class="fa fa-times makepointer"
                    (click)="removeTopic(topic)"></i></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary makecross" [disabled]="!addskillform.valid" (click)="submitSkill(skillName.value);">Save
          Skill</button>
      </div>

    </div>
  </form>
</div>
  `,
  styleUrls: ['./search-result.component.css']
})
export class NgbdModalContentComponent {
  @Input() name;
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

  constructor(public activeModal: NgbActiveModal) { }
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
    } else {
      alert("Skill Added");

    }
  }
}


=======
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
>>>>>>> neoskills

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

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

<<<<<<< HEAD
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
    } else {
      alert("Skill Added");

    }
  }
=======
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
>>>>>>> neoskills

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
<<<<<<< HEAD
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = item.name;
    modalRef.componentInstance.name = item.name;
=======
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
>>>>>>> neoskills
  }

}
