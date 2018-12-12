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
  isChecked: boolean = false;
  count = 0;
  temp = 0;
  ngOnInit() {
  }

  questionForm = this.fb.group({
    skill: ['Java'],
    user: ['1'],
    topic: ['', Validators.required],
    question: ['', Validators.required],
    options: this.fb.array([
      this.fb.control('', [Validators.required])
    ]),
    solution: this.fb.array([
      this.fb.control('')
    ]),
  });

  get options() {
    return this.questionForm.get('options') as FormArray;
  }
  get solution() {
    return this.questionForm.get('solution') as FormArray;
  }

  constructor(private fb: FormBuilder, private contributeQuestionService: ContributeQuestionService) { }

  addOption() {
    if (this.count < 4) {
      this.options.push(this.fb.control(''));
      this.solution.push(this.fb.control(''));
      this.count++;
    }

  }

  removeOption(index) {
    console.log("Removing option");
    const questionControl = <FormArray>this.questionForm.controls['options'];
    const answerControl = <FormArray>this.questionForm.controls['solution'];
    // remove the chosen row
    questionControl.removeAt(index);
    answerControl.removeAt(index);
    this.count--;
    console.log(this.count);
  }

  onSubmit() {
    console.log(this.questionForm.value);
    this.contributeQuestionService.addQuestion(this.questionForm.value)
      .subscribe(data => {
        console.log("Response: " + data)
      });
      alert("Question submitted succesfully for Review!")
  }
  check(event) {
    if (event.target.checked) {
      this.isChecked = true;
    }
    else {
      this.isChecked = false;
    }
    console.log(this.isChecked);
  }

}
