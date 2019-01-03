export class Option {
    id: number;
    description: string;
    answer: boolean;
    response: boolean = false;
    answerType: string;
    counter: number = 0;

    constructor(data: any, answerType: string ) {
        data = data || {};
        this.answerType = answerType;
        this.id = data.id;
        this.description = data.description;
        this.answer = data.answer;
        this.answerType = answerType;
    }
}
