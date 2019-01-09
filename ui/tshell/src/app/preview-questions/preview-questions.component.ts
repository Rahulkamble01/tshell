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
  csvData: any = null;
  errorCount: any;
  constructor(private router: Router, private contributeQuestionService: ContributeQuestionService) { }

  ngOnInit() {
    this.csvData = this.contributeQuestionService.getCsvData();
    this.errorCount = 0;
    if(this.csvData!=null){
      for (let i = 0; i < this.csvData.length; i++) {
        if (this.csvData[i].error != null || !this.csvData[i].validTopic) {
          this.errorCount += 1;
        }
      }
      console.log(this.errorCount);
    }
  }

  submitForReview() {
    this.questionsList = this.csvData;
    alert('Questions are submitted successfully for Review!');
    this.contributeQuestionService.submitForReview(this.questionsList).subscribe(
      data => {
      }
    );
    this.router.navigate(['/contributeQuestion']);
  }
  approveSubmittted() {
    this.questionsList = this.csvData;
    alert('Questions saved successfully as Approved!');
    this.contributeQuestionService.approveSubmittted(this.questionsList).subscribe(
      data => {
      }
    );
    this.router.navigate(['/contributeQuestion']);
  }
  retry() {
    alert('No Questions are posted!');
    this.router.navigate(['/contributeQuestion']);
  }
}
