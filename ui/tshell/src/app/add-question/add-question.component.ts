import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ContributeQuestionService } from '../contribute-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private fb: FormBuilder, private contributeQuestionService: ContributeQuestionService) { }

  ngOnInit() {
  }


  isChecked: boolean = false;
  count = 1;
  temp = 0;
  question: any;
  option: any = '';
  topic: any;
  answer: any;
  optionsList: any[] = [{ id: 1, opt: '', ans: 'true' }];
  searchQuery: string;
  submit() {
    let json = JSON.stringify({
      question: this.question,
      topic: this.topic,
      options: this.optionsList
    });
    console.log(json);
    this.contributeQuestionService.addQuestion(json)
      .subscribe(data => {
        console.log("Response: " + data)
      });
    alert("Question submitted succesfully for Review!")
  }
  modalOption: any = '';
  modalQuestion: any = '';

  // check(event) {
  //   if (event.target.checked) {
  //     this.isChecked = true;
  //   }
  //   else {
  //     this.isChecked = false;
  //   }
  //   console.log(this.isChecked);
  // }

  addOption() {
  
    if (this.count < 6) {
        this.count++;
      this.optionsList.push({ id: this.count, opt: '', ans: 'true' });
    }
  }

  removeOption(index: number) {
    console.log('Index : ' + index)
    this.optionsList.splice(index - 1, 1);
    this.count--;
    console.log(this.count)


  }
  saveQuestion() {
    console.log(this.question);

  }
  saveOption() {
    console.log(this.optionsList);

  }


}
