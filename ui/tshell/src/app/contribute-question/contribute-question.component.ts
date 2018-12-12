import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContributeQuestionService } from '../contribute-question.service';


@Component({
  selector: 'app-contribute-question',
  templateUrl: './contribute-question.component.html',
  styleUrls: ['./contribute-question.component.css']
})
export class ContributeQuestionComponent implements OnInit {

  ngOnInit() {
  }
  userFile: any = File;
  uploadForm: any = FormGroup;
  profileForm = this.fb.group({
    skills: [''],
    topics: [''],
    question: [''],
    options: this.fb.array([
      this.fb.control('')
    ]),
    answers: this.fb.array([
      this.fb.control('')
    ]),
  });

  get options() {
    return this.profileForm.get('options') as FormArray;
  }
  get answers() {
    return this.profileForm.get('answers') as FormArray;
  }

  constructor(private fb: FormBuilder, private contributeQuestionService: ContributeQuestionService, private router: Router) {
    this.uploadForm = fb.group({
      csvFile: ['', Validators.required]
    })
  }

  addOption() {
    this.options.push(this.fb.control(''));
    this.answers.push(this.fb.control(''));
  }

  removeOption(index) {
    console.log("Removing option");
    const control = <FormArray>this.profileForm.controls['options'];
    const control1 = <FormArray>this.profileForm.controls['answers'];
    // remove the chosen row
    control.removeAt(index);
    control1.removeAt(index);

  }
  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  upload() {
    console.log('File Upload method is called!');
    let formData = new FormData;
    formData.append('file', this.userFile);
    this.contributeQuestionService.uploadQuestions(formData).subscribe(
      data => {
        console.log(data);
      }
    )
    this.router.navigate(['preview']);
  }
}
