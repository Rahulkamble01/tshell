import { Component, OnInit } from '@angular/core';
import { SearchExistingQuestionsService } from '../search-existing-questions.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-existing-questions',
  templateUrl: './search-existing-questions.component.html',
  styleUrls: ['./search-existing-questions.component.css']
})
export class SearchExistingQuestionsComponent implements OnInit {

  constructor(private service: SearchExistingQuestionsService, private route: ActivatedRoute , private fb : FormBuilder) { }

  

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      console.log("Id " + params['id']);
      this.skillId = +params['id'];
        });*/
        console.log(" ngOnInit")

        

    this.skillId = 1;
    this.service.fetchReviewQuestion(this.skillId).subscribe(
      
      data => {
        this.question = data[0];
        console.log(this.question);
        this.questionId = this.question.id;
        this.optionList = this.question.optionList;
        console.log( this.optionList.length);

      this.countOption=this.optionList.length
      console.log( "count option"+this.countOption);
      }
    )
  }

  form = new FormGroup({
    description: new FormControl(
      '',
      [Validators.required])
    })
countOption:number;
  error:any;
  status=false;
  skillId: number;
  question: any;
  optionList: any;
  questionId: number;
  description: string = '';
  
  addOption() {
    console.log( "addOption()");
    let newOption = {
      answer: false,
      description: this.description,
      question: {
        id: this.questionId
      }
    };
    this.service.addOption(JSON.stringify(newOption)).subscribe(
      data => {
        /* this.status = true;
        this.description = ''; 
         console.log(data);
        this.question = data;        
        this.questionId = this.question.id;
        this.optionList = this.question.optionList;
        console.log( this.optionList.length);

      this.countOption=this.optionList.length
      console.log( "count option"+this.countOption);   */
      this.service.fetchReviewQuestion(this.skillId).subscribe(
      
        data => {

          this.status = true;
         this.description = ''
          this.question = data[0];
          this.questionId = this.question.id;
          this.optionList = this.question.optionList;
        this.countOption=this.optionList.length
        //console.log( "count option"+this.countOption);
        }
      )
           
       },
      error => {
        this.error = error
        this.status=false;
      
        }
        )
      this.form.reset();
      }








      


      modalClose(){
        this.status=false;
        this.error=false;
        this.form.reset();            
       }






}

