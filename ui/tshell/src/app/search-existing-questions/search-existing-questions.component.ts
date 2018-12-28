import { Component, OnInit } from '@angular/core';
import { SearchExistingQuestionsService } from '../search-existing-questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-existing-questions',
  templateUrl: './search-existing-questions.component.html',
  styleUrls: ['./search-existing-questions.component.css']
})
export class SearchExistingQuestionsComponent implements OnInit {

  constructor(private service: SearchExistingQuestionsService, private route: ActivatedRoute) { }

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
        } else {
          this.message = 'NOPE \<br\>No questions left for review.';
        }
      }
    )
  }

  skillId: number;
  question: any={};
  optionList: any;
  questionId: number;
  description: string = '';
  skillName: string;
  message: string = 'undefined';
  deleteOptionId: number;
  deleteOptionStatus: boolean = false;

  addOption() {
    let newOption = {
      answer: false,
      description: this.description,
      question: {
        id: this.questionId
      }
    };
    this.service.addOption(JSON.stringify(newOption)).subscribe(
      data => {
      })
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
    console.log("selected option Id is" + optionId);
  }

  deleteoption(id: number) {
    console.log("id in delete option:" + id);
    this.service.deleteoption(id).subscribe(
      data => {
        console.log(data);
      })
    this.deleteOptionStatus = true;
  }
}
