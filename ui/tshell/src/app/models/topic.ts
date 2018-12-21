import { Question } from './question';

export class Topic {
    id: number;
    name: string;
    questions: Question[];

    constructor(data: any) {
        data = data;
        this.id = data.id;
        this.name = data.name;
        this.questions = [];

        for (const q of data) {
            this.questions.push(new Question(q.questions));
        }


    }
}
