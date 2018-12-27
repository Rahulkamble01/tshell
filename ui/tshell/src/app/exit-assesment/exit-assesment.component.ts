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
  json: any =
    // tslint:disable-next-line:max-line-length
    [{ "id": 1, "name": "Java", "searchCount": 25, "active": "yes", "testCount": 10, "description": "Java Skill ", "image": "a", "topics": [{ "id": 1, "name": "Inheritance", "questions": [{ "id": 1, "question": "Which of the following is true about inheritance in Java?", "status": "Approved", "questionDifficultyLevel": { "id": 3, "description": "Hard" }, "questionAnswerType": { "id": 2, "type": "Multiple" }, "options": [{ "id": 7, "description": "Private methods are final.", "answer": true }, { "id": 8, "description": "Protected members are accessible within a package and ", "answer": true }, { "id": 9, "description": "Protected methods are final.", "answer": false }, { "id": 10, "description": "We cannot override private methods. ", "answer": true }] }, { "id": 2, "question": "A class member declared protected becomes a member of subclass of which type?", "status": "Approved", "questionDifficultyLevel": { "id": 2, "description": "Meduim" }, "questionAnswerType": { "id": 1, "type": "Single" }, "options": [{ "id": 11, "description": " public member", "answer": false }, { "id": 12, "description": " private member", "answer": true }, { "id": 13, "description": "protected member", "answer": false }, { "id": 14, "description": "Static Member", "answer": false }] }, { "id": 3, "question": "Which of this keyword must be used to inherit a class?", "status": "Approved", "questionDifficultyLevel": { "id": 1, "description": "Easy" }, "questionAnswerType": { "id": 1, "type": "Single" }, "options": [{ "id": 15, "description": "super", "answer": false }, { "id": 16, "description": "this", "answer": false }, { "id": 17, "description": "extend", "answer": false }, { "id": 18, "description": "extends", "answer": true }] }] }, { "id": 2, "name": "Abstraction", "questions": [] }, { "id": 3, "name": "Exception Handling", "questions": [{ "id": 1, "question": "Which of the following is true about inheritance in Java?", "status": "Approved", "questionDifficultyLevel": { "id": 3, "description": "Hard" }, "questionAnswerType": { "id": 2, "type": "Multiple" }, "options": [{ "id": 7, "description": "Private methods are final.", "answer": true }, { "id": 8, "description": "Protected members are accessible within a package and ", "answer": true }, { "id": 9, "description": "Protected methods are final.", "answer": false }, { "id": 10, "description": "We cannot override private methods. ", "answer": true }] }, { "id": 2, "question": "A class member declared protected becomes a member of subclass of which type?", "status": "Approved", "questionDifficultyLevel": { "id": 2, "description": "Meduim" }, "questionAnswerType": { "id": 1, "type": "Single" }, "options": [{ "id": 11, "description": " public member", "answer": false }, { "id": 12, "description": " private member", "answer": true }, { "id": 13, "description": "protected member", "answer": false }, { "id": 14, "description": "Static Member", "answer": false }] }, { "id": 3, "question": "Which of this keyword must be used to inherit a class?", "status": "Approved", "questionDifficultyLevel": { "id": 1, "description": "Easy" }, "questionAnswerType": { "id": 1, "type": "Single" }, "options": [{ "id": 15, "description": "super", "answer": false }, { "id": 16, "description": "this", "answer": false }, { "id": 17, "description": "extend", "answer": false }, { "id": 18, "description": "extends", "answer": true }] }] }, { "id": 4, "name": "Arrays", "questions": [] }] }]
    ;
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
  temp: any = [];
  assesmentOptionssss: any = [];
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

    });

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

    // tslint:disable-next-line:max-line-length
    // this.quizes = this.quizService.getAll();    // this.quizName = this.quizes[0].id;    // this.loadQuiz(this.quizName);  // this.loadQuiz(this.json);

  }


  loadQuestions(json, index: number) {
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
      // this.onSubmit();
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
    // this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    console.log(question);
    console.log(option);
    if (question.answerType.id === 1 || question.answerType.id === 2) {
      question.options.forEach((x) => {
        if (x.id !== option.id) {
          console.log('option ' + option.id + ' x.id : ' + x.id);
          x.selected = false;
          console.log('inside on Select selected : ' + x.selected);
        }
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
  };
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
    this.temp.options.forEach(o => {
      this.assesmentOptionssss.push({
        id: o.id,
        description: o.description,
        answer: o.answer
      }
      );
    });
    this.QuesJson = JSON.stringify({
      assessment: this.assesmentDetails,
      question:  this.temp ,
      correct: 'false',
      assessmentOption: this.assesmentOptionssss,
      });
      console.log(this.temp);
      console.log(this.QuesJson);
    this.assesmentService.saveAssessmentResponse(this.QuesJson).subscribe();
  }
  /*
  isAnswered(question) {
    this.AnsweredStatus = question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    this.qId = question.id;

  };*/
  /*
    isAnsweredStatus(questId, index) {
  
      if (questId == this.qId && index == this.pager.index) {
        this.AnsweredStatusArray.splice(index, 0, this.temp.options.find(x => x.selected) ? 'Answered' : 'Not Answered');
  
      }
      return this.AnsweredStatusArray[index];
    }*/
  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.answer) ? 'correct' : 'wrong';
  };

  /* onSubmit() {
     let answers = [];
     this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
 
     // Post your data to the server here. answers contains the questionId and the users' answer.
     console.log(this.quiz.questions);
     this.mode = 'result';
     this.router.navigate(['/assesmentscore']);
 
   }
 */
  ngOnDestroy() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#989D9E');
  }



}
