import { Topic } from './topic';

export class Skill {
    id: number;
    name: string;
    searchCount: number;
    active: string;
    testCount: number;
    description: string;
    creationDate: Date;
    topics: Topic[];

    constructor(name, active, description, topics, creationDate) {
        this.name = name;
        this.active = active;
        this.description = description;
        this.topics = topics;
        this.creationDate = creationDate;
    }
}

export class ReferenceSkill {
    id: number;
    name: string;
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
}
