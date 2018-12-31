import { Component, OnInit } from '@angular/core';
import { SearchExistingQuestionsService } from '../search-existing-questions.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-search-existing-questions',
  templateUrl: './search-existing-questions.component.html',
  styleUrls: ['./search-existing-questions.component.css']
})
export class SearchExistingQuestionsComponent implements OnInit {

  constructor(private service: SearchExistingQuestionsService, private route: ActivatedRoute, private fb: FormBuilder) { }



  ngOnInit() {
    /*this.route.params.subscribe(params => {
      console.log("Id " + params['id']);
      this.skillId = +params['id'];
        });*/
    this.skillId = 1;
    this.skillName = 'Java';
    this.service.fetchReviewQuestion(this.skillId).subscribe(
      data => {
        if (data[0] != null) {
          this.question = data[0];
          this.questionId = this.question.id;
          this.optionList = this.question.optionList;
          this.countOption = this.optionList.length;
        } else {
          this.message = 'NOPE, No questions found for review.';
        }
        error => {
          console.log(error);
          this.message = 'NOPE, No questions found for review.';
          //this.error = error;
        }
      }
    )
  }

  form = new FormGroup({
    description: new FormControl(
      '',
      [Validators.required, Validators.maxLength(200)])
  })
  countOption: number;
  error: any;
  status = false;
  skillId: number;
  question: any = {};
  optionList: any;
  questionId: number;
  optionDescription: string = '';
  skillName: string;
  message: string = 'undefined';
  deleteOptionId: number;
  deleteOptionStatus: string = 'undefined';

  addOption() {
    console.log("addOption()");
    let newOption = {
      answer: false,
      description: this.form.value.description,
      question: {
        id: this.questionId
      }
    };
    this.service.addOption(JSON.stringify(newOption)).subscribe(
      data => {
        if (data != null) {
          this.status = true;
          this.optionDescription = '';
          this.question = data;
          this.questionId = this.question.id;
          this.optionList = this.question.optionList;
          this.countOption = this.optionList.length
        } else {
          this.message = 'NOPE, No questions found for review.';
        }
      },
      error => {
        this.error = error;
        this.status = false;

      }
    )
    this.form.reset();
  }

  modalClose() {
    this.status = false;
    this.error = false;
    this.form.reset();
    //this.deleteOptionStatus = '';
  }


  approveQuestion(questionId: number) {
    console.log(questionId);
    let status: string = 'approve';
    console.log(status);
    this.service.updateQuestionStatus(questionId, status, this.skillId).subscribe(
      data => {
        if (data[0] != null) {
          this.question = data[0];
          this.questionId = this.question.id;
          this.optionList = this.question.optionList;
        } else {
          this.message = 'NOPE, No Questions found for review';
          console.log(this.message);
        }
      }
    )
  }

  rejectQuestion(questionId: number) {
    console.log(questionId);
    let status: string = 'reject';
    console.log(status);
    this.service.updateQuestionStatus(questionId, status, this.skillId).subscribe(
      data => {
        if (data[0] != null) {
          this.question = data[0];
          this.questionId = this.question.id;
          this.optionList = this.question.optionList;
        } else {
          this.message = 'NOPE, No Questions found for review';
          console.log(this.message);
        }
      }
    )
  }

  getselectedoption(optionId: number) {
    this.deleteOptionId = optionId;
    this.deleteOptionStatus = 'undefined';
    this.optionList.forEach(
      element => {
        if(element.id == optionId){
          this.form.patchValue({description: element.description});
        }
    });
  }

  deleteOption() {
    this.service.deleteOption(this.deleteOptionId).subscribe(
      data => {
        console.log(data);
        if (data){
          this.form.patchValue({description: ''});
          this.deleteOptionStatus = 'true';
          this.optionList.forEach(
            element => {
              if(element.id == this.deleteOptionId){
                this.optionList.splice(this.optionList.indexOf(element),1);
              }
              this.countOption = this.optionList.length;
              console.log(this.optionList.indexOf(element));
          });
          console.log(this.optionList);
        } else {
          this.deleteOptionStatus = 'false';
        }
      },error => {
        console.log(error);
        this.deleteOptionStatus = 'false';
              })
  }
}
