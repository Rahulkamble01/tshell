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

  count=0;
 
  ngOnInit() {
  }

  profileForm = this.fb.group({
    skill: ['Java'],
    user:['1'],
    topic: ['',Validators.required],
    question:['',Validators.required],
    options: this.fb.array([
      this.fb.control('',[Validators.required])
    ]),
    solution: this.fb.array([
      this.fb.control('')
    ]),
  });

  get options() {
    return this.profileForm.get('options') as FormArray;
  }
  get solution(){
    return this.profileForm.get('solution') as FormArray;
  }

  constructor(private fb: FormBuilder,private contributeQuestionService:ContributeQuestionService) { }

  addOption() {
      if(this.count < 4){
        this.options.push(this.fb.control(''));
        this.solution.push(this.fb.control(''));
        this.count++;
      }
      
  }
  
  removeOption(index){
   console.log("Removing option");
   const control = <FormArray>this.profileForm.controls['options'];
   const control1 = <FormArray>this.profileForm.controls['solution'];
   // remove the chosen row
   control.removeAt(index);
   control1.removeAt(index);
   this.count--;
   console.log(this.count);
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.contributeQuestionService.addQuestion(this.profileForm.value)
    .subscribe(data => {
      console.log("Response: "+data)
    });
  }
}
