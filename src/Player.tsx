
export class Player {
    private static idCounter = 0;
    private readonly _id: number;
    private _rank: number = 0;
    private _score: number = 0;

    constructor(
        public name: string,
    ) {
        this._id = Player.idCounter;
        Player.idCounter++;
    }

    get score(): number {
        return this._score;
    }
    set score(value: number) {
        this._score = value;
    }
    get rank(): number {
        return this._rank;
    }
    set rank(value: number) {
        this._rank = value;
    }
    get id(): number {
        return this._id;
    }
}