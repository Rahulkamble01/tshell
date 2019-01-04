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
