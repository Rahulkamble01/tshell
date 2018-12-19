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
  BarColors = [

    {
      backgroundColor:  [
        '#66ffff',
        '#66ffff',
        '#66ffff',
        '#66ffff',
        
      ]
    }


  ]


   
  chartOptions = {
    responsive: true,
    chartLabels:{
      fontSize: 40
    }
  };

  chartData = [ { data: [18500, 10000, 50000, 150000 ], label: 'Skills' } ];

  chartLabels = ['Java', 'Sql', 'J2EE', 'Spring'];

  onChartClick(event) {
    console.log(event);
  }
  donutColors = [
    {
      backgroundColor: [
        '#ced',
        '#ced',
        '#ced',
        '#ced',
      ]
    }
  ];
}
