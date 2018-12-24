import { Topic } from './topic';

export class Skill {
    id:number;
    name:string;
    searchCount:number;
    active:string;
    testCount:number;
    description:string;
    date_of_creation: Date;
    topics:Topic[];


    
    constructor(name,active,description,topics,date_of_creation) {

        this.name = name;
        this.active = active;
        this.description = description;
        this.topics = topics;
        this.date_of_creation = date_of_creation;
      
    }
}
