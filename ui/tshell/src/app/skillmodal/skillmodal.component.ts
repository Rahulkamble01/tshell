import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill';
import { Topic } from '../topic';
import { SkillserviceService } from '../skillservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-skillmodal',
  templateUrl: './skillmodal.component.html',
  styleUrls: ['./skillmodal.component.css']
})
export class SkillmodalComponent implements OnInit {
  add: boolean;
  item: any;
  json: any;
  error: any;
  sametopic = false;
  status: number = 0;
  expression: any;
  @Input() name: any;

  topics: Array<Topic> = [];
  allskills: any;
  sameSkillName: boolean = false;
  /*   success = false;
    fail= false;
     */



  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private SkillService: SkillserviceService) { }

  addskillform = new FormGroup
    ({
      name: new FormControl(
        '',
        [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(45)
        ]),
      description: new FormControl(
        '',
        [Validators.required,
        Validators.maxLength(400),
        ]),

      topicName: new FormControl(
        '',
        [
          Validators.minLength(1),
          Validators.maxLength(70)
        ]),
      image: new FormControl(''),
    });


  addTopic(id, topicname) {
    const topic = new Topic(id, topicname);
    // alert(JSON.stringify(topic.name));
    let counter = 0;

    if (topicname == '') {
      counter = 1;
    }
    for (let i = 0; i < this.topics.length; i++) {
      if (topicname == this.topics[i].name || topicname == '') {
        counter = 1;
      }
    }
    if (counter == 0) {
      this.topics.push(topic);
      this.sametopic = false;
      this.clearInput();
    } else {
      this.sametopic = true;
    }



  }


  removeTopic(topic) {
    const index = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
    this.sametopic = false;
  }

  get topicName(): any {
    return this.addskillform.get('topicName');
  }

  clearInput() {
    this.topicName.reset();
  }

  clearAllInput() {
    this.topics = [];
  }


  addSkill() {


    /* for (let i = 0; i < this.allskills.length; i++) {
      let userSkillname = this.addskillform.controls['name'].value;
      let dataSkillname = this.allskills[i].name;
      if (userSkillname.toUpperCase() == dataSkillname.toUpperCase()) {
        this.sameSkillName = true;
      }
    } */

    /*  if (this.sameSkillName != true) { */
    const skill = new Skill(this.addskillform.controls['name'].value, "Active", this.addskillform.controls['description'].value, this.topics, new Date());
    /*  console.log(this.sameSkillName); */
    console.log(skill);
    this.SkillService.addSkill(skill).subscribe(
      data => {
        console.log(data);
        this.status = data;
        this.error = false;
        console.log(this.status);
        if (this.status == 2) {

          this.addskillform.reset();
          this.sametopic = false;
          this.clearAllInput();
        }



      },
      error => {
        this.error = error;
        this.status = 0;
      }
    );

  }



  ngOnInit() {

  }

}

