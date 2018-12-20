export class Skill {
    id: number;
    name: string;
    searchCount: number;
    active: string;
    testCount: number;
    description: string;
    image: any;
    createdOn: Date;
    topics: Topics[];
}
export class Topics {
    id: number;
    name: string;
    skillId: Skill["id"];
}
