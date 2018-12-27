import { QuizConfig } from './quiz-config';
import { Question } from './question';
import { Topic } from './topic';

export class Quiz  {
    questions: Question[] = [];

    constructor(data: any, index: number) {
        if (data) {
            // this.questions = [];
        for (const  question of data) {
            this.questions.splice(index, 0, new Question(question));
              }
        }
    }
}
