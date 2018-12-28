import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NgbActiveModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { SkillserviceService } from '../skillservice.service';
import { ConfirmationDialogService } from '../confirmation-dialog.service';

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

  // tslint:disable-next-line:max-line-length
  constructor(public activeModal: NgbActiveModal, private skillService: SkillserviceService, private fb: FormBuilder, private confirmationDialogService: ConfirmationDialogService) { }
  addTopic(id, topicname) {
    const topic1 = new Topic(id, topicname);
    // let topic1 = null;
    console.log(id + " " + topicname);
    // if (id != null) {
    //   topic1 = new FormGroup({ id: new FormControl(null), name: new FormControl(topicname) });
    // } else {
    //   topic1 = new FormGroup({ id: new FormControl(id), name: new FormControl(topicname) });
    // }
    this.topics.push(topic1);
    this.clearInput();
  }
  removeTopic(topic) {
    const index = this.topics.indexOf(topic);
    console.log(index + " " + this.topics[index].name);

    this.confirmationDialogService.confirm(`Deletion of ${this.topics[index].name}`, 'Do you really want to Delete ?')
      .then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed:', confirmed);
          this.skillService.deleteTopic(this.topics[index].name, this.item.id).subscribe();
          this.topics.splice(index, 1);
        } else {
          console.log('User confirmed:', confirmed);
          return;
        }

      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    // this.skillService;

    // this.topics.splice(index, 1);
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
    this.addskillform.patchValue(this.item);
    const control = <FormArray>this.addskillform.controls['topics'];
    this.item.topics.forEach(element => {
      this.addTopic(element.id, element.name);
    });
  }

}
