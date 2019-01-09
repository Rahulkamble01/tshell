import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ContributeQuestionService } from '../contribute-question.service';
import { CountOfPendingServiceService } from '../count-of-pending-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CountOfPendingQuestionsService } from '../count-of-pending-questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


  max=500;
  empId:any;
  skillId :number;
  skillName:any;
  checkedCount=0;
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
  status = "Pending";
  createdUser: any;
  questionDifficultyLevel = "medium";
  optionsList: any = [{ id: 1, description: '', answer: '' }];
  searchQuery: string;
  modalOption: any = '';
  modalQuestion: any = '';

  userFile: any = File;
  uploadForm: any = FormGroup;
  ngOnInit() {
    this.skillId = this.countOfPendingQuestionsService.skillId;
    this.skillName = this.countOfPendingQuestionsService.skillName;
    this.contributeQuestionService.getTopics(this.skillId).subscribe(

      data => {
        this.topicList = data;
        console.log(this.topicList)
      },
    );
    this.empId=this.authService.getEmployeeId();
    console.log(this.empId);


  }
  constructor(private fb: FormBuilder,
    private contributeQuestionService: ContributeQuestionService, private router: Router,private authService:AuthService,private countOfPendingQuestionsService: CountOfPendingQuestionsService) {
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
        id: "2",
        description: this.questionDifficultyLevel
      },
      questionAnswerType: {
        id: this.questionAnswerTypeIdFunction(),
        type:this.questionAnswerTypeDescriptionFunction()
      },
      createdUser: {
        employeeId:this.empId
      },
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
      this.checkedCount++;
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

  questionAnswerTypeIdFunction(){
    if(this.checkedCount>1){
      return 2;
    }else{
      return 1;
    }
  }
  questionAnswerTypeDescriptionFunction(){
    if(this.checkedCount>1){
      return "Multiple";
    }else{
      return "Single";
    }
  }


}
