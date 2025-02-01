export class Player {
    private _rank: number = 0;
    private _score: number = 0;
    public name: string = "";

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
}