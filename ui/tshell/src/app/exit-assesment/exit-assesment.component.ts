import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ExitAssesmentService } from '../exit-assesment.service';
import { Router, ActivatedRoute } from '@angular/router';


// declare var countdown: any;

@Component({
  selector: 'app-exit-assesment',
  templateUrl: './exit-assesment.component.html',
  styleUrls: ['./exit-assesment.component.css'],
})
export class ExitAssesmentComponent implements OnInit, OnDestroy {
  skillId: number;
  skillName: string;
  assessmentType: string;
  assessmentDuration = 1200;   // in secs i.e.1200 = 20 mins
  questionIds: any;
  questionId: number;
  question: any;
  QuesJson: any;

  startAssesmentJson: any;
  assesmentDetails: any;
  // tslint:disable-next-line:max-line-length
  questionSet: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  temp: any = [];
  assessmentOptions: any = [];

  optionList: any = [];
  // tslint:disable-next-line:max-line-length
  answerStatus: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mode = 'quiz';
  // tslint:disable-next-line:max-line-length
  presentStatus: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';


  title = 'cognilearn';

  // tslint:disable-next-line:max-line-length
  constructor(private quizService: ExitAssesmentService, private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private assesmentService: ExitAssesmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    this.route.params.subscribe(params => {
      this.skillId = params['skillid'];
      this.skillName = params['skillname'];
      this.assessmentType = params['type'];
    });
    this.startAssesmentJson = JSON.stringify({
      date: Date.now(),
      type: this.assessmentType,
      skill: {
        id:  this.skillId
      },
      user: {
        employeeId: 729703
      }
    });
    console.log(this.startAssesmentJson);
    this.assesmentService.startAssessment(this.startAssesmentJson).subscribe(d => {
      this.assesmentDetails = d;
      console.log(this.assesmentDetails);
      this.assesmentService.getQuestionId(1).subscribe(data => {
        this.questionIds = data;
        console.log(this.questionIds);
        this.questionId = this.questionIds[this.pager.index];
        console.log(this.questionId);

        this.assesmentService.getQuestion(this.questionId).subscribe(q => {
          this.question = q;
          this.loadQuiz();
          this.loadQuestions(this.question, this.pager.index);
          console.log(this.question);
        });

      });

    });
  }


  loadQuestions(json, index: number) {
    // this.quiz = new Quiz(json, index);
    if (this.presentStatus[index] != 'visited') {
      this.questionSet[index] = json[0];
      this.presentStatus[index] = 'visited';
    }
    console.log(this.questionSet);
  }

  loadQuiz() {
    this.pager.count = 40;
    this.startTime = new Date();
    this.timer = setInterval(() => { this.tick(); }, 1000);
    this.duration = this.parseTime(this.assessmentDuration);
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.assessmentDuration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }



  get filteredQuestions() {
    return this.questionSet ? this.questionSet.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: any, option: any) {
    console.log(question);
    console.log(option);
    // AnswerType == 1 means radio button  and only one option is true
    if (question.questionAnswerType.id == 1) {
      question.optionList.forEach((x) => {
        if (x.id == option.id) {
          x.response = true;
          console.log('Option : ' + option.id + ', x.id : ' + x.id + ', response : ' + x.response);
        } else {
          x.response = false;
          console.log('Option : ' + option.id + ', x.id : ' + x.id + ', response : ' + x.response);
        }
      });
    }
    // AnswerType == 2 means checkbox  button  and only multiple option are true
    if (question.questionAnswerType.id == 1) {
      question.optionList.forEach((x) => {
        if (x.id == option.id) {
          if (x.counter % 2 == 0) {
            // When user checks counter = even number and marked as Checked
            x.response = true;
            x.counter++;
            console.log('Option : ' + option.id + ', x.id : ' + x.id + ', response : ' + x.response);
          } else {
            // When user unchecks counter = odd number and marked as Checked
            x.response = false;
            this.answerStatus[this.pager.index] = 0;
            x.counter++;
            console.log('Option : ' + option.id + ', x.id : ' + x.id + ', response : ' + x.response);
          }

        }
      });
    }
    // tslint:disable-next-line:max-line-length
    question.optionList.every(e => e.response == false) ? this.answerStatus[this.pager.index] = 0 : this.answerStatus[this.pager.index] = 1;
    this.temp = question;
  }

  correctanswer(index) {
    return this.answerStatus[index] ? 'Answered' : 'Not Answered';
  }


  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.questionId = this.questionIds[this.pager.index];
      console.log(this.questionId);
      this.assesmentService.getQuestion(this.questionId).subscribe(d => {
        this.question = d;
        this.loadQuestions(this.question, this.pager.index);
        console.log(this.question);
        this.saveResponse();
      });
      this.mode = 'quiz';
    }
  }

  saveResponse() {
    console.log(this.temp.length);
    if (this.temp.length != 0) {
      this.temp.optionList.forEach(o => {
        this.assessmentOptions.push({
          id: o.id,
          description: o.description,
          answer: o.answer
        }
        );
      });
      this.QuesJson = JSON.stringify({
        assessment: this.assesmentDetails,
        question: this.temp,
        correct: 'false',
        assessmentQuestionOption: this.assessmentOptions,
      });
      console.log(this.temp);
      console.log(this.QuesJson);
      this.assesmentService.saveAssessmentResponse(this.QuesJson).subscribe();
      this.assessmentOptions = [];
      this.temp = [];
    }
  }

  onSubmit() {
    this.saveResponse();
    this.assesmentDetails['endTime'] = Date.now();
    console.log('saving');
    this.assesmentService.submitAssessment(this.assesmentDetails).subscribe();
    clearTimeout(this.timer);
    this.router.navigate(['/assesmentscore', this.assesmentDetails.id]);

  }

  ngOnDestroy() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#dee2e6');
  }



}
