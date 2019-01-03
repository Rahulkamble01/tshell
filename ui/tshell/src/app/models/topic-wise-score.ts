export class TopicWiseScore {
    score: number;
    topicName: string;
    weightage: number;
    totalScore: number;

    constructor(data: any) {
        data = data || {};
        this.score = data.score;
        this.topicName = data.topicName;
        this.weightage = data.weightage;
        this.totalScore = data.totalScore;

    }
}
