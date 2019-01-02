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

  ngOnInit() {
  }
  userFile: any = File;
  uploadForm: any = FormGroup;
  fileName: any;
  fileExtension: any;
  fileExtensionError: boolean = false;
  fileExtensionMessage: any;
  isChecked: boolean = false;
  count = 0;
  temp = 0;
  constructor(private fb: FormBuilder, private contributeQuestionService: ContributeQuestionService, private router: Router) {
    this.uploadForm = fb.group({
      csvFile: ['', Validators.required]
    })
  }
  questionForm = this.fb.group({
    skill: ['Java'],
    user: ['1'],
    topic: ['', Validators.required],
    question: ['', Validators.required],
    options: this.fb.array([
      this.fb.control('', [Validators.required])
    ]),
    solution: this.fb.array([
      this.fb.control('')
    ]),
  });
  get options() {
    return this.questionForm.get('options') as FormArray;
  }
  get solution() {
    return this.questionForm.get('solution') as FormArray;
  }
  addOption() {
    if (this.count < 4) {
      this.options.push(this.fb.control(''));
      this.solution.push(this.fb.control(''));
      this.count++;
    }

  }

  removeOption(index) {
    console.log("Removing option");
    const questionControl = <FormArray>this.questionForm.controls['options'];
    const answerControl = <FormArray>this.questionForm.controls['solution'];
    // remove the chosen row
    questionControl.removeAt(index);
    answerControl.removeAt(index);
    this.count--;
    console.log(this.count);
  }

  onSubmit() {
    console.log(this.questionForm.value);
    this.contributeQuestionService.addQuestion(this.questionForm.value)
      .subscribe(data => {
        console.log("Response: " + data)
      });
    alert("Question submitted succesfully for Review!")
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

  onSelectFile(event) {
    var file = event.target.files[0];
    this.userFile = file;
    console.log(this.userFile.name);
    this.fileName = file.name;
    var allowedExtensions = ["CSV", "csv"];
    this.fileExtension = this.fileName.split('.').pop();
    console.log('File extension is ' + this.fileExtension);
    if (this.isInArray(allowedExtensions, this.fileExtension)) {
      this.fileExtensionError = false;
      this.fileExtensionMessage = ""
    } else {
      this.fileExtensionMessage = "Only CSV file is allowed!"
      this.fileExtensionError = true;
    }
  }
  isInArray(array, word) {
    return array.indexOf(word.toLowerCase()) > -1;
  }

  async upload() {
    console.log('File Upload method is called!');
    console.log('File extension error is ' + this.fileExtensionError);
    console.log(this.fileExtensionMessage);

    let formData = new FormData;
    formData.append('file', this.userFile);

    this.contributeQuestionService.uploadQuestions(formData).subscribe(
      async data => {
        this.contributeQuestionService.csvData = await data;
        await this.contributeQuestionService.setCsvData(data);
      
      })

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    
    this.router.navigate(['preview']);
  }
}
