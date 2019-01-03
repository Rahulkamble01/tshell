import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContributeQuestionService } from '../contribute-question.service';

@Component({
  selector: 'app-preview-questions',
  templateUrl: './preview-questions.component.html',
  styleUrls: ['./preview-questions.component.css']
})
export class PreviewQuestionsComponent implements OnInit {
  questionsList: any;

  constructor(private router: Router, private contributeQuestionService: ContributeQuestionService) { }

  ngOnInit() {
  }
  review() {
    this.questionsList = [
      {
        "id": 0,
        "question": " What allows the programmer to destroy an object x?",
        "status": null,
        "questionDifficultyLevel": null,
        "questionAnswerType": null,
        "createdUser": null,
        "optionList": [
          {
            "id": 0,
            "description": "x.delete()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "x.finalize()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Runtime.getRuntime().gc()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Only the garbage collection system can destroy an object.",
            "question": null,
            "answer": true,
            "invalidAnswerFormat": false,
            "lengthExceeded": true
          },
          {
            "id": 0,
            "description": "x.garbage()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          }
        ],
        "empty": false,
        "lengthExceeded": false
      },
      {
        "id": 0,
        "question": " What allows the programmer to destroy an object x?",
        "status": null,
        "questionDifficultyLevel": null,
        "questionAnswerType": null,
        "createdUser": null,
        "optionList": [
          {
            "id": 0,
            "description": "x.delete()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "x.finalize()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Runtime.getRuntime().gc()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Only the garbage collection system can destroy an object.",
            "question": null,
            "answer": true,
            "invalidAnswerFormat": false,
            "lengthExceeded": true
          },
          {
            "id": 0,
            "description": "x.garbage()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          }
        ],
        "empty": false,
        "lengthExceeded": false
      },
      {
        "id": 0,
        "question": " What allows the programmer to destroy an object x?",
        "status": null,
        "questionDifficultyLevel": null,
        "questionAnswerType": null,
        "createdUser": null,
        "optionList": [
          {
            "id": 0,
            "description": "x.delete()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "x.finalize()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Runtime.getRuntime().gc()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          },
          {
            "id": 0,
            "description": "Only the garbage collection system can destroy an object.",
            "question": null,
            "answer": true,
            "invalidAnswerFormat": false,
            "lengthExceeded": true
          },
          {
            "id": 0,
            "description": "x.garbage()",
            "question": null,
            "answer": false,
            "invalidAnswerFormat": false,
            "lengthExceeded": false
          }
        ],
        "empty": false,
        "lengthExceeded": false
      }
    ];
    alert('Questions are submitted successfully for Review!');
    this.contributeQuestionService.submitForReview(this.questionsList);
    this.router.navigate(['/contributeQuestion']);
  }
  retry() {
    alert('No Questions are posted!');
    this.router.navigate(['/contributeQuestion']);
  }
}
