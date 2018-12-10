import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contribute-question',
  templateUrl: './contribute-question.component.html',
  styleUrls: ['./contribute-question.component.css']
})
export class ContributeQuestionComponent implements OnInit {

  myGroup: any;

  cities: any;


  ngOnInit() {

    // this.myGroup = new FormArray([
    //   this.options = new FormControl()
    // ]);
    // console.log(this.myGroup);

  }

  // questionForm= new FormGroup({
  //   skills: new FormControl(''),
  //   topics:new FormControl(''),
  //   question: new FormControl(''),
  //   options:new FormControl(''),
  //   answers:new FormControl('')

  // });



  // submit(skills: string, topics: string, question: string, options, answers: string) {

  //   console.log(options.value);
  // }

  profileForm = this.fb.group({
    skills: ['',],
    topics: [''],
    question:[''],
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
  get answers(){
    return this.profileForm.get('answers') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addOption() {
    this.options.push(this.fb.control(''));
    this.answers.push(this.fb.control(''));
  }
  
  removeOption(index){
   console.log("Removing option");
   const control = <FormArray>this.profileForm.controls['options'];
   const control1 = <FormArray>this.profileForm.controls['answers'];
   // remove the chosen row
   control.removeAt(index);
   control1.removeAt(index);

  }

  onSubmit() {
    
    console.log(this.profileForm.value);
  }



}
