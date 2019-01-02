import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Option, Question, Quiz, QuizConfig, Topic, } from '../models/index';
import { ExitAssesmentService } from '../exit-assesment.service';
import { Router } from '@angular/router';


// declare var countdown: any;

@Component({
  selector: 'app-exit-assesment',
  templateUrl: './exit-assesment.component.html',
  styleUrls: ['./exit-assesment.component.css'],
})
export class ExitAssesmentComponent implements OnInit, OnDestroy {
  quizes: any[];
  qId: any;
  questionIds: any;
  questionId: number;
  result: any;
  taken: any;
  len: any;
  QuesJson: any;
  question: Question;
  samplearray: any = [];
  startAssesmentJson: any;
  assesmentDetails: any;
  questionSet: any = [];
  temp: any = [];
  assessmentOptions: any = [];
  quiz: Quiz = new Quiz(null, null);
  // topics: Topic = new Topic(null);

  topics: any = [];
  questions: any = [];

  options: any = [];

  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 1200,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };
  AnsweredStatus: any;
  AnsweredStatusArray: any = [];
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
  responseanswer: any;


  title = 'cognilearn';

  type = 'checkbox';

  // tslint:disable-next-line:max-line-length
  constructor(private quizService: ExitAssesmentService, private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private assesmentService: ExitAssesmentService) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    this.startAssesmentJson = JSON.stringify({
      date: Date.now(),
      type: 'exit',
      skillId: 1,
      userId: 729703,
    });
    console.log(this.startAssesmentJson);
    this.assesmentService.startAssessment(this.startAssesmentJson).subscribe(d => {
      this.assesmentDetails = d;
      console.log(this.assesmentDetails);
      //  this.loadQuiz(this.questionSet);

      this.assesmentService.getQuestionId(1).subscribe(data => {
        this.questionIds = data;
        console.log(this.questionIds);
        this.questionId = this.questionIds[this.pager.index];
        console.log(this.questionId);
        this.assesmentService.getQuestion(this.questionId).subscribe(d => {
          this.question = d;
          this.loadQuiz();
          this.loadQuestions(this.question, this.pager.index);
          console.log(this.question);
        });

      });

    });



    // tslint:disable-next-line:max-line-length
    // this.quizes = this.quizService.getAll();    // this.quizName = this.quizes[0].id;    // this.loadQuiz(this.quizName);  // this.loadQuiz(this.json);

  }


  loadQuestions(json, index: number) {
    this.questionSet.splice(index, 0, json);
    this.quiz = new Quiz(json, index);
  }
  // Without Service
  loadQuiz() {
    this.pager.count = 40;
    console.log('length of json is' + this.pager.count);
    console.log(this.quiz.questions);
    this.startTime = new Date();
    this.timer = setInterval(() => { this.tick(); }, 1000);
    this.duration = this.parseTime(1200);
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
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
    return this.quiz.questions;
    // console.log(this.questionSet.slice(this.pager.index, this.pager.index + this.pager.size));
    // return this.questionSet ? this.questionSet.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    console.log(question);
    console.log(option);
    // AnswerType == 1 means radio button  and only one option is true
    if (question.answerType.id === 1) {
      question.options.forEach((x) => {
        if (x.id == option.id) {
          x.selected = true;
          console.log('Option : ' + option.id + ', x.id : ' + x.id + ', selected : ' + x.selected);
        } else {
          x.selected = false;
          console.log('Option : ' + option.id + ', x.id : ' + x.id + ', selected : ' + x.selected);
        }
      });
    }
    // AnswerType == 2 means checkbox  button  and only multiple option are true
    if (question.answerType.id === 2) {
      question.options.forEach((x) => {
        if (x.id == option.id) {
          if (x.counter % 2 == 0) {
            // When user checks counter = even number and marked as Checked
            x.selected = true;
            x.counter++;
          } else {
            // When user unchecks counter = odd number and marked as Checked
            x.selected = false;
            x.counter++;
          }
          console.log('Option : ' + option.id + ', x.id : ' + x.id + ', selected : ' + x.selected);
        }
        //  else {
        //   x.selected = false;
        //   console.log('Option : ' + option.id + ', x.id : ' + x.id + ', selected : ' + x.selected);
        // }
      });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
    this.temp = question;
    this.qId = question.id;
    // this.isAnswered(question);
    // this.isAnsweredStatus();
  }
  isAnswered(questId) {
    if (questId == this.qId) {
      // return this.temp.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    }
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
      console.log(this.quiz.questions);
    }
  }

  saveResponse() {
    console.log(this.temp.length);
    if (this.temp.length !== 0) {
      this.temp.options.forEach(o => {
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
  /*
  isAnswered(question) {
    this.AnsweredStatus = question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    this.qId = question.id;

  };*/

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.answer) ? 'correct' : 'wrong';
  }

  onSubmit() {
    this.saveResponse();
    this.assesmentDetails['endTime'] = Date.now();
    console.log('saving');
    this.assesmentService.submitAssessment(this.assesmentDetails).subscribe();
    clearTimeout(this.timer);
    this.router.navigate(['/assesmentscore']);

  }

  ngOnDestroy() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#989D9E');
  }



}
