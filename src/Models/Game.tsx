export class Game {
    public name: string = "";
    public banner: any;

    constructor(name?: string) {
        if (name != null) {
            this.name = name;
        }
    }
}