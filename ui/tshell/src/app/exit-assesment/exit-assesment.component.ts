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
  quiz: Quiz = new Quiz(this.json);
  // topics: Topic = new Topic(null);

  topics: any = [];
  questions: any = [];
  question: any = [];
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
  constructor(private quizService: ExitAssesmentService, private router: Router, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    console.log('JSON DATA IS :');
    console.log(this.json);
    for (const topics of this.json) {
      this.topics.push(topics.topics);
    }

    console.log(this.topics);
    for (let i = 0; i < this.topics.length; i++) {
      console.log('inside topics.length : ' + i);
      this.topics[i].forEach(x => {
        this.questions.push(x.questions);
      });
    }

    console.log('This.questions DATA IS :');
    console.log(this.questions);
    for (let i = 0; i < this.questions.length; i++) {
      console.log('inside topics.length : ' + i);
      for (const q of this.questions[i]) {
        //  console.log('queistion is ' + q.question);
        this.question.push(q.question);
      }
    }
    console.log('This.question DATA IS :');
    console.log(this.question);


    /*    $(document).ready(function () {
          countdown(2);
        });*/


    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    // this.quizes = this.quizService.getAll();
    // this.quizName = this.quizes[0].id;
    // this.loadQuiz(this.quizName);
    this.loadQuiz(this.json);

  }
  /****** Using service******************
    loadQuiz(quizName: string) {
      this.quizService.get(quizName).subscribe(res => {
        this.quiz = new Quiz(res);
        this.pager.count = this.quiz.questions.length;
        this.startTime = new Date();
        this.timer = setInterval(() => { this.tick(); }, 1000);
        this.duration = this.parseTime(this.config.duration);
      });
      this.mode = 'quiz';
    }
  */


  // Without Service
  loadQuiz(json) {
    json.forEach(res => {
      console.log('length of json is' + json.length);
      // console.log('length of topics.question is' + this.topics.questions.length);
      this.quiz = new Quiz(res);
      this.pager.count = 40;
      this.startTime = new Date();
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
    // console.log(this.quiz);
    // console.log(this.quiz.topics);
    // console.log(this.quiz.topics);
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

  /*   get filteredQuestions() {
 
    return (this.topics.questions) ?
      this.topics.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }*/
  /*
    get filteredQuestions() {
      return (this.questions) ?
        this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }*/
  /*
    onSelect(question: Question, option: Option) {
      if (question.questionTypeId === 1) {
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
    }
  */
  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
  /*
  
    isAnswered(question: Question) {
      return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    };
  
  
  
    isCorrect(question: Question) {
      return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
    };
  */
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
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#989D9E');
  }



}
