import { QuizConfig } from './quiz-config';
import { Question } from './question';
import { Topic } from './topic';

export class Quiz {
    id: number;
    name: string;
    active: string;
    description: string;
    config: QuizConfig;
    topics: any;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.active = data.active;
           // this.config = new QuizConfig(data.config);
            this.topics = [];
        for (const  topic of data) {
                this.topics.push(new Topic(topic.topics));
              }
        }
    }
}
