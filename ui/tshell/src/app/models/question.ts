import { Option } from './option';
import { QuestionDifficultyLevel } from './question-difficulty-level';
import { QuestionAnswerType } from './question-answer-type';

export class Question {
    id: number;
    question: string;
    status: string;
    level: QuestionDifficultyLevel;
    answerType: QuestionAnswerType;
    options: Option[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.question = data.question;
        this.status = data.status;
        this.level = new QuestionDifficultyLevel(data.questionDifficultyLevel);
        this.answerType = new QuestionAnswerType(data.questionAnswerType);
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });

    }
}
