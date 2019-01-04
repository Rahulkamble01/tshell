import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContributeQuestionService } from '../contribute-question.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-preview-questions',
  templateUrl: './preview-questions.component.html',
  styleUrls: ['./preview-questions.component.css']
})
export class PreviewQuestionsComponent implements OnInit {
  questionsList: any;
  csvData = [];

  constructor(private router: Router, private contributeQuestionService: ContributeQuestionService) { }

  ngOnInit() {
    this.csvData = this.contributeQuestionService.getCsvData();
    for (let data of this.csvData) {
      let correctAnswerCount = 0;
      let invalidinput = 0;
      let count = 0;
      for (let option of data.optionList) {

        if (option.answer) {
          correctAnswerCount += 1;
        }
        if ((option.description == '' && !option.invalidAnswerFormat) || (option.description != '' && option.invalidAnswerFormat)) {
          invalidinput += 1;
        }
        if (option.description != '' && (option.description == 'TRUE' || option.description == 'FALSE')) {
          if (option.answer) {
            count += 1;
          }
        }
      }
      if (correctAnswerCount < 1 || invalidinput > 0 || count == 2) {
        data.error = "Invalid Answer Format";
      }
      else {
        data.error = "";
      }
    }
    this.csvData = this.contributeQuestionService.getCsvData();
    console.log(this.csvData);
  }

  review() {
    this.questionsList = this.csvData;
    alert('Questions are submitted successfully for Review!');
    this.contributeQuestionService.submitForReview(this.questionsList).subscribe(
      data => {
        console.log(data);
      }
    );
    this.router.navigate(['/contributeQuestion']);
  }
  retry() {
    alert('No Questions are posted!');
    this.router.navigate(['/contributeQuestion']);
  }
}
