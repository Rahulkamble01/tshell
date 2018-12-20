import { Component, OnInit } from '@angular/core';
import { TotalquestionsService } from '../totalquestions.service';

@Component({
  selector: 'app-totalquestion',
  templateUrl: './totalquestion.component.html',
  styleUrls: ['./totalquestion.component.css']
})
export class TotalquestionComponent implements OnInit {
  userdata: any;

  constructor(private totalquestion: TotalquestionsService) { }

  ngOnInit() {
    this.totalquestion.totalquestion(1).subscribe(
      data => {
        this.userdata = data;
        console.log(data);
      }
    );
  }
}
