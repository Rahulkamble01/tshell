import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-searched-skills',
  templateUrl: './most-searched-skills.component.html',
  styleUrls: ['./most-searched-skills.component.css']
})
export class MostSearchedSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   
  chartOptions = {
    responsive: true
  };

  chartData = [ { data: [18500, 10000, 50000, 150000 ], label: 'Skills' } ];

  chartLabels = ['Java', 'Sql', 'J2EE', 'Spring'];

  onChartClick(event) {
    console.log(event);
  }
}
