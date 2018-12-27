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
  error:any;
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
        Validators.maxLength(25),
        Validators.pattern(/^[a-zA-Z0-9 ._-]+$/),

        ]),
      description: new FormControl(
        '',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(400),
        ]),

      topicName: new FormControl(
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(60),
          Validators.pattern(/^[a-zA-Z ._-]+$/),
        ]),
      image: new FormControl(''),
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

    console.log(this.status);

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

        console.log(this.status);
        /*******calling the service to fetch new list of skills**********/
        this.SkillService.getAll().subscribe(
          data => {
            this.allskills = data;
            console.log(this.allskills);
          }
          ,
          error => {this.error = error
            this.status=0;
    }
        );
        /************************************************************* */
        if (this.status == 2) {
          this.addskillform.reset();
          this.clearAllInput();
        }

      },
      error => {this.error = error
              this.status=0;
      }
    )
    ;
    /*  }
     else {
 
       this.status = 3;
 
       console.log(this.status);
       console.log("Skill already exists");
       this.sameSkillName = false;
 
     } */

  }



  ngOnInit() {

    this.SkillService.getAll().subscribe(
      data => {
        this.allskills = data;
        console.log(this.allskills);
      }
    );
  }

}


