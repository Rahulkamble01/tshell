export class Skill {
    id: number;
    name: string;
    searchCount: number;
    active: string;
    testCount: number;
    description: string;
    image: any;
    createdOn: Date = new Date();
    topics: Topics[];
}
export class Topics {
    id: number;
    name: string;
    skillId: Skill["id"];

    constructor(name) {
        this.name = name;
    }

}
