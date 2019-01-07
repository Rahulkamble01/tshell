import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Skill, ReferenceSkill } from '../skill';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-reference-skill-model',
  templateUrl: './reference-skill-model.component.html',
  styleUrls: ['./reference-skill-model.component.css']
})
export class ReferenceSkillModelComponent implements OnInit {

  @Input() allReferenceSkills: any;
  @Input() allSkills: any;
  model: any;
  sameSkill = false;

  addReferenceSkillForm = new FormGroup({
    id: new FormControl(),
    classifier: new FormControl(),
    referenceSkillName: new FormControl(),
    referenceSkill: this.fb.array([]),
  });

  referenceSkillName: Array<ReferenceSkill> = [];

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.addReferenceSkillForm.patchValue(this.allReferenceSkills);
    const control = <FormArray>this.addReferenceSkillForm.controls['referenceSkill'];
    this.allReferenceSkills.forEach(element => {
      this.addReferenceSkill(element.referenceSkill.id, element.referenceSkill.name);
    });
  }

  formatter = (x: { name: string }) => "";
  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => (term === '' ? []
      : this.allSkills.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    ))
  )

  itemSelected($event) {
    let counter = 0;
    this.referenceSkillName.forEach(element => {
      if ($event.item.name.toLowerCase() === element.name.toLowerCase()) {
        this.sameSkill = true;
        counter = 1;
      }
    });
    if (counter === 0) {
      this.addReferenceSkill($event.item.id, $event.item.name);
      this.sameSkill = false;
    }
  }

  addReferenceSkill(id, skillName) {
    console.log('inside Adding Skills');
    const skill = new ReferenceSkill(id, skillName);
    console.log(skill);
    this.referenceSkillName.push(skill);
  }

  clearInput() {
    this.addReferenceSkillForm.get('referenceSkillName').reset();
  }
}
