import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicWiseScore, Score } from '../models/index';
import { AssessmentScoreService } from '../assessment-score.service';
@Component({
  selector: 'app-score-assesment',
  templateUrl: './score-assesment.component.html',
  styleUrls: ['./score-assesment.component.css']
})
export class ScoreAssesmentComponent implements OnInit {
  score: Score = new Score(null);
  topicWiseScore: any = [];
  assessmentId: number;
  totalQuestions: number = 40;
  total: number = 0;
  totalOutOf: number = 40;
  overallpecent: number = 0;
  overallClass: any;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private scoreService: AssessmentScoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#dee2e6');
    this.route.params.subscribe(params => {
      this.assessmentId = params['assessmentid'];

      this.scoreService.getTopicWiseScore(this.assessmentId).subscribe(data => {
        this.score = new Score(data);
        this.topicWiseScore = this.score.topicWiseScore;

        this.topicWiseScore.forEach(x => {
          x.outof = Math.round(x.weightage * this.totalQuestions / 100);
          x.percentage = Math.floor((x.score / x.outof) * 100);
          this.total += x.score;
          this.totalOutOf = 40;
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

      });
    });


  }

  homePage() {
    this.router.navigate(['/']);
  }



}
