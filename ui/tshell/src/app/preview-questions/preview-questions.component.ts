import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContributeQuestionService } from '../contribute-question.service';

@Component({
  selector: 'app-preview-questions',
  templateUrl: './preview-questions.component.html',
  styleUrls: ['./preview-questions.component.css']
})
export class PreviewQuestionsComponent implements OnInit {
  csvData = [];

  constructor(private router: Router, private contributeQuestionService: ContributeQuestionService) { }

  ngOnInit() { 
    this.csvData =  this.contributeQuestionService.getCsvData() ;


    for(let data of this.csvData){
     let correctAnswerCount=0;
     for(let option of data.optionList){
       if(option.answer){
         correctAnswerCount+=1;
       }
     }
     if(correctAnswerCount<1){
       data.error="No option is true";
     }     
     else{
      data.error="";
     } 
    }

    for (let data of this.csvData){
      for(let option of data.optionList){
        if(option.description=="" && option.answer!=""){
          data.error1="invalid";
          
        }
        else{
          data.error1="";
        }
      }
    }
    
    

     console.log(this.csvData);
  

    
  }

  review() {
    alert('Questions are submitted successfully for Review!');
    this.router.navigate(['/contributeQuestion']);
  }
  retry() {
    alert('No Questions are posted!');
    this.router.navigate(['/contributeQuestion']);
  }
}
