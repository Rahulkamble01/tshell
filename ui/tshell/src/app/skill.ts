import { Topic } from './topic';

export class Skill {
    id: number;
    name: string;
    searchCount: number;
    active: string;
    testCount: number;
    description: string;
    createdOn: Date;
    topics: Topic[];

    constructor(name, active, description, topics, createdOn) {

        this.name = name;
        this.active = active;
        this.description = description;
        this.topics = topics;
        this.createdOn = createdOn;

    }
}
