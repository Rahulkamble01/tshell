import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.css']
})
export class SkillpageComponent implements OnInit {

  skills: string = 'SQL';
  top5: any = [
    {
      score: 90,
      user: { name: 'Arisankar M' }
    },
    {
      score: 80,
      user: { name: 'Joseph Vijay' }
    },
    {
      score: 70,
      user: { name: 'Vijay Kumar' }
    },
    {
      score: 60,
      user: { name: 'Sundar' }
    },
    {
      score: 50,
      user: { name: 'Arun Kumar' }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
