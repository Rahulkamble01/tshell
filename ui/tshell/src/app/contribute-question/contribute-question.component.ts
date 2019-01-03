import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContributeQuestionService } from '../contribute-question.service';


@Component({
  selector: 'app-contribute-question',
  templateUrl: './contribute-question.component.html',
  styleUrls: ['./contribute-question.component.css']
})
export class ContributeQuestionComponent implements OnInit {



  max=500;
  skillId = 1;
  topicList: any[];
  isChecked: boolean = false;
  count = 1;
  temp = 0;
  question: any;
  option: any = '';
  optionTemp:any;
  questionTemp:any;
  topic: any;
  answer: any;
  status = "pending";
  createdUser: any;
  questionDifficultyLevel = "medium";
  optionsList: any = [{ id: 1, description: '', answer: '' }];
  searchQuery: string;
  modalOption: any = '';
  modalQuestion: any = '';
  userFile: any = File;
  uploadForm: any = FormGroup;
  ngOnInit() {
    this.contributeQuestionService.getTopics(this.skillId).subscribe(

      data => {
        this.topicList = data;
        console.log(this.topicList)
      },
    );

  }
  constructor(private fb: FormBuilder,
    private contributeQuestionService: ContributeQuestionService, private router: Router) {
    this.uploadForm = fb.group({
      csvFile: ['', Validators.required]
    })

  }

  //Functions
  submit() {
    let json = JSON.stringify({
      question: this.question,
      status: this.status,
      questionDifficultyLevel: {
        id: "3",
        description: this.questionDifficultyLevel
      },
      createdUser: this.createdUser,
      optionList: this.optionsList,
      topic: this.topic
    });
    console.log(json);
    this.contributeQuestionService.addQuestion(json)
      .subscribe(data => {
        console.log("Response: " + data)
      });
    console.log(this.topic);
    alert("Question submitted succesfully for Review!")
  }


  addOption() {
    if (this.count < 6) {
      this.count++;
      this.optionsList.push({ id: this.count, description: '', answer: '' });
    }
  }

  removeOption(index: number) {
    console.log('Index : ' + index);
    for (let i = index; i < this.optionsList.length; i++) {
      this.optionsList[i].id = this.optionsList[i].id - 1;
    }
    this.optionsList.splice(index - 1, 1);
    this.count--;
    console.log(this.count);
    this.optionDescriptionValidation();
  }
  saveQuestion() {
    console.log(this.question);
  
    this.questionDescriptionValidation();

  }
  saveOption() {
    console.log("description"+this.optionsList[0].description);
    console.log(this.optionsList);
    this.optionDescriptionValidation();
  }
  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }
  check(event) {
    if (event.target.checked) {
      this.isChecked = true;
    }
    else {
      this.isChecked = false;
    }
    console.log(this.isChecked);
  }
  optionDescriptionValidation(){
    console.log(this.optionsList);
    this.optionTemp=1;
    for(let i=0;i<this.optionsList.length;i++){
      if(this.optionsList[i].description==''){
        console.log(this.optionsList[i].description);
         this.optionTemp=0;
      }
    }
    console.log(this.optionTemp);
  }
  questionDescriptionValidation(){
    this.questionTemp=0;
    if(this.question.length >= this.max){
            console.log("max length reached");
    }
    if(this.question==''){
      this.questionTemp=1;
    }
  }
}
