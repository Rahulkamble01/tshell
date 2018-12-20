import { QuizConfig } from './quiz-config';
import { Question } from './question';
import { Topic } from '../topic';

export class Quiz {
    id: number;
    name: string;
    active: string;
    description: string;
    config: QuizConfig;
    topics: Topic[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.topics = [];
            data.topics.forEach(t => {
                this.topics.push(new Topic(t));
            });
        }
    }
}
