import { QuizConfig } from './quiz-config';
import { Question } from './question';
import { Topic } from './topic';

export class Quiz {
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this.questions = [];
        for (const  question of data) {
                this.questions.push(new Question(question));
              }
        }
    }
}
