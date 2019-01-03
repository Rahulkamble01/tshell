import { Component, OnInit } from '@angular/core';
import { TotalQuestionsService } from '../totalQuestions.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-questiongraph',
  templateUrl: './questiongraph.component.html',
  styleUrls: ['./questiongraph.component.css']
})
export class QuestiongraphComponent implements OnInit {
  user:any;
  chartData = [
    { data: [], label: 'Total Question' },
  ];
  chartLabels = [];
  error:any;
  EmployeeId=this.service.getEmployeeId();

  constructor(private totalquestion: TotalQuestionsService,private service : AuthService) { }
  
  ngOnInit() {
    this.totalquestion.totalquestion(this.service.getEmployeeId()).subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
            this.chartData[0].data[i] = data[i][0] ;
            this.chartLabels[i] = data[i][1] + ' : ' +data[i][0] ;
            console.log(data);
        }
      },
      error => {
        this.error=error;
        console.log(this.error);
      }
      
    );
  }
}
