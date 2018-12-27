import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillserviceService } from '../skillservice.service';

@Component({
  selector: 'app-editskillmodal',
  templateUrl: './editskillmodal.component.html',
  styleUrls: ['./editskillmodal.component.css']
})
export class EditskillmodalComponent implements OnInit {
  add: boolean;
  expression: any;
  @Input() item: any;
  skills: any = [];
  topics: Array<Topic> = [];

  addskillform = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(25),
      Validators.pattern(/^[a-zA-Z0-9 ._-]+$/),

      ]),
    searchCount: new FormControl(0),
    active: new FormControl(false),
    testCount: new FormControl(0),
    description: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(400),
      ]),
    image: new FormControl,
    createdOn: new FormControl(new Date()),
    topicName: new FormControl(
      '',
      [
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern(/^[a-zA-Z ._-]+$/),
      ]),
    topics: this.fb.array([])

  });

  constructor(public activeModal: NgbActiveModal, private skillService: SkillserviceService, private fb: FormBuilder) { }
  addTopic(topicname) {
    // const topic = new Topic(topicname);
    const topic = new FormGroup({ id: new FormControl(null), name: new FormControl(topicname) });
    this.topics.push(topic.value);
    this.clearInput();
  }
  removeTopic(topic) {
    const index = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
  }

  get topicName(): any { return this.addskillform.get('topicName'); }
  clearInput() { this.topicName.reset(); }

  submitSkill() {
    if (!this.add) {
      const control = <FormArray>this.addskillform.controls['topics'];
      this.topics.forEach(element => {
        control.push(new FormControl(element));
      });
      //to avoid circular JSON Structure
      const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
      // console.log(JSON.stringify(this.addskillform.value, getCircularReplacer()));
      if (this.addskillform.controls['createdOn'].value == null) {
        this.addskillform.controls['createdOn'].patchValue(new Date());
      }
      console.log(this.addskillform.value);
      this.skillService.updateSkill(JSON.stringify(this.addskillform.value, getCircularReplacer())).subscribe();
    }
  }
  ngOnInit() {
    if (!this.add) {
      this.addskillform.patchValue(this.item);
      const control = <FormArray>this.addskillform.controls['topics'];
      this.item.topics.forEach(element => {
        control.push(new FormControl(element));
      });
    }
  }

}
