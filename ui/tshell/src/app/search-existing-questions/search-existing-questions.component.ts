import { Component, OnInit } from '@angular/core';
import { SearchExistingQuestionsService } from '../search-existing-questions.service';
import { FormBuilder } from '@angular/forms';
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
    this.service.fetchReviewQuestion(this.skillId).subscribe(
      data => {
        this.question = data[0];
        this.questionId = this.question.id;
        this.optionList = this.question.optionList;
      }
    )
  }

  skillId: number;
  question: any;
  optionList: any;
  questionId: number;
  description: string = '';


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
}

