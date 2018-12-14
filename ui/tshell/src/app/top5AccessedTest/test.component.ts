import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };

  chartData = [ { data: [7, 10, 15,6,10 ], label: 'Skills' } ];

  chartLabels = ['Java', 'Sql', 'Spring','Angular','jdbc'];

  onChartClick(event) {
    console.log(event);
  }
/*<--------------------------------------Top 5 Accessed Tests Working WebService Code------------------------------> 
/*Top5AccessedTes() {
    console.log("hello");
    this.testService.getTestDetails().subscribe(
      data => {
        console.log(data);
          data.forEach((element,index) => {
            console.log(element.name, index);
            this.chartLabels[index]=element.name;
            this.chartData[0].data[index]=element.testCount;
          });

          this.chartLabels.forEach(element => {
            console.log(element);
          });
      }
    )
  }
  
  <---------------------------------------------------------------------------------------------------------->
  */



}

