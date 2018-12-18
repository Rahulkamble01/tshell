import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-questions',
  templateUrl: './preview-questions.component.html',
  styleUrls: ['./preview-questions.component.css']
})
export class PreviewQuestionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  confirm(){
    alert('Questions are submitted successfully for Review!');
    this.router.navigate(['']);
  }
  abort(){
    alert('No Questions are posted!');
    this.router.navigate(['']);
  }
}
