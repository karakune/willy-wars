import question from "../assets/Avatars/question.jpg";
import chungus from "../assets/Avatars/Chungus.jpg";


export class Player {
    public score: number = 0;
    public name: string = "";
    public avatar: string = question;
    public matchRank: number = 0;
    public previousMatchRank: number = 0;
    public playedThisRound: boolean = false;

    constructor(name?: string, avatar?: string) {
        if (name != null) {
            this.name = name;
        }

        if (avatar != null) {
            this.avatar = avatar;
        }
    }

    public static getAllAvatars(): string[] {
        return [
            chungus,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
            question,
        ];
    }
}