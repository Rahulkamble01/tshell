import { Component, OnInit } from '@angular/core';
import { SearchExistingQuestionsService } from '../search-existing-questions.service';
import { FormBuilder, FormArray,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-existing-questions',
  templateUrl: './search-existing-questions.component.html',
  styleUrls: ['./search-existing-questions.component.css']
})
export class SearchExistingQuestionsComponent implements OnInit {

  constructor(private service: SearchExistingQuestionsService, private fb: FormBuilder) { }

  ngOnInit() {

  }
 
  questions:string="Which of the following are legal lines of Java code?, Which data type value is returned by all transcendental math functions?Which of these literals can be contained in float data type variable? What is the range of short data type in Java?";
  option2:string="int w = (int)888.8; byte x = (byte)100L;long y = (byte)100;byte z = (byte)100L;";
  count=0;
  questionList:any;
  searchQuery:string;
  questionForm = this.fb.group({
    id:['3546'],
    question:['Which of the following are legal lines of Java code?, Which data type value is returned by all transcendental math functions?Which of these literals can be contained in float data type variable? What is the range of short data type in Java?'],
    options:this.fb.array([
      this.fb.control('')
    ]),
    solution:[],
    opttionList:this.fb.group({}),
    user:this.fb.group({
      id:['']
    })
  })

  searchQ () {
    console.log('This is searchQ()')
    this.service.fetchQuestions(this.searchQuery).subscribe(
      data => {
        this.questionList = data;
      }
    )
  }





/* Add Option */

  
  count1 = 0;
  option: string;
  description: string = "description";
  option1 = {
    answer: true,
    question: {
      id: 1,
    }
  };


  optionForm = this.fb.group({
    options: this.fb.array([
     this.fb.control('')
   ])
 });
  addOption() {
    
    console.log('inside addOption()');
    console.log(JSON.stringify(this.option1));
    this.option1[this.description] = this.option;
    
    console.log(JSON.stringify(this.option1));
    this.service.addOption(JSON.stringify(this.option1)).subscribe(data => {
    console.log(data);

    })
  }
  get options() {
    return this.optionForm.get('options') as FormArray;
    }

  addOptions() {
    if(this.count<=4){
    this.options.push(this.fb.control(''));
    this.count++;
  }
}
  removeOption(index) {
    console.log("Removing option");
    const optionControl = <FormArray>this.optionForm.controls['options'];
    
    // remove the chosen row
    optionControl.removeAt(index);
    this.count--;
    console.log(this.count);
  }


  


 
}

