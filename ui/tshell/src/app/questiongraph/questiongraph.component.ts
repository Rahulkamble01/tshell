import { Component, OnInit } from '@angular/core';
import { TotalquestionsService } from '../totalquestions.service';

@Component({
  selector: 'app-questiongraph',
  templateUrl: './questiongraph.component.html',
  styleUrls: ['./questiongraph.component.css']
})
export class QuestiongraphComponent implements OnInit {
  userdata: any = [];
  BarColors: any;
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 800, 260, 54, 432], label: 'Total Question' },

  ];

  chartLabels = ['Java:330 ', 'Angular:800', 'Spring:260', 'Css:54', 'html:432'];






  onChartClick(event) {
    console.log(event);
  }

  constructor(private totalquestion: TotalquestionsService) { }

  ngOnInit() {
    this.totalquestion.totalquestion(1).subscribe(
      data => {

        for (let i = 0; i < data.skills.length; i++) {
          let count = 0;
          for (let j = 0; j < data.skills[i].topics.length; j++) {
            count = count + data.skills[i].topics[j].questions.length;
          }

          // this.chartData[0].data[i]=count;
          // this.chartLabels[i]=data.skills[i].name+': '+count;



          this.userdata[i] = {
            skill: {
              name: data.skills[i].name,
              count: count
            }
          };
        }
        console.log(data);
      }
    );
  }
  // chartData = [
  //   { data: [], label: 'Total Question' },

  // ];

  // chartLabels = [];

}
