export class Option {
    id: number;
    description: string;
    answer: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.description = data.description;
        this.answer = data.answer;
    }
}
