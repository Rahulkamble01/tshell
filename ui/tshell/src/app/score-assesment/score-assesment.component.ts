import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TopicWiseScore, Score } from '../models/index';
import { AssessmentScoreService } from '../assessment-score.service';
@Component({
  selector: 'app-score-assesment',
  templateUrl: './score-assesment.component.html',
  styleUrls: ['./score-assesment.component.css']
})
export class ScoreAssesmentComponent implements OnInit {
  topics: any = [
    {
      'name': 'Inheritance',
      'score': 4,
      'outof': 10,
      'percentage': 0
    },
    {
      'name': 'Encapsulation',
      'score': 10,
      'outof': 15,
      'percentage': 0
    }, {
      'name': 'Polymorphism',
      'score': 2,
      'outof': 10,
      'percentage': 0
    }, {
      'name': 'Threading',
      'score': 9,
      'outof': 10,
      'percentage': 0
    }, {
      'name': 'Exception',
      'score': 6,
      'outof': 10,
      'percentage': 0
    }
  ];
  score: Score = new Score(null);
  topicWiseScore: any = [];
  assessmentId: number = 325;
  totalQuestions: number = 40;
  total: number = 0;
  totalOutOf: number = 0;
  overallpecent: number = 0;
  overallClass: any;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private scoreService: AssessmentScoreService) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#989D9E');

    this.scoreService.getTopicWiseScore(this.assessmentId).subscribe(data => {
      console.log(data);
      this.score = new Score(data);
      this.topicWiseScore = this.score.topicWiseScore;
      console.log(this.topicWiseScore);




      this.topicWiseScore.forEach(x => {
        x.outof = Math.round(x.weightage * this.totalQuestions / 100);
        x.percentage = Math.floor((x.score / x.outof) * 100);
        this.total += x.score;
        this.totalOutOf += x.outof;
        if (x.percentage > 0 && x.percentage < 30) {
          x['class'] = 'bg-danger';
        } else if (x.percentage >= 30 && x.percentage < 50) {
          x['class'] = 'bg-warning';
        } else if (x.percentage >= 50 && x.percentage < 70) {
          x['class'] = 'bg-info';
        } else if (x.percentage >= 70 && x.percentage < 100) {
          x['class'] = 'bg-success';
        }

      });

      /* this.topics.forEach(x => {
         x.percentage = Math.floor((x.score / x.outof) * 100);
         this.total += x.score;
         this.totalOutOf += x.outof;
         if (x.percentage > 0 && x.percentage < 30) {
           x['class'] = 'bg-danger';
         } else if (x.percentage >= 30 && x.percentage < 50) {
           x['class'] = 'bg-warning';
         } else if (x.percentage >= 50 && x.percentage < 70) {
           x['class'] = 'bg-info';
         } else if (x.percentage >= 70 && x.percentage < 100) {
           x['class'] = 'bg-success';
         }
 
       });*/

      this.overallpecent = Math.floor((this.total / this.totalOutOf) * 100);

      if (this.overallpecent > 0 && this.overallpecent < 30) {
        this.overallClass = 'bg-danger';
      } else if (this.overallpecent >= 30 && this.overallpecent < 50) {
        this.overallClass = 'bg-warning';
      } else if (this.overallpecent >= 50 && this.overallpecent < 70) {
        this.overallClass = 'bg-info';
      } else if (this.overallpecent >= 70 && this.overallpecent < 100) {
        this.overallClass = 'bg-success';
      }
      console.log('Percent' + this.topics[4].name + 'Percent' + this.topics[4].class);
    });
  }

  homePage() {
    this.router.navigate(['/']);
  }



}
