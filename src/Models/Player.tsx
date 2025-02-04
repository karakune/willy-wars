import {Dispatch, SetStateAction} from "react";

export class Player {
    private _rank: number = 0;
    private _score: number = 0;
    public name: string = "";

    constructor(name?: string) {
        if (name != null) {
            this.name = name;
        }
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
}

export function savePlayers(players: Player[]) {
    // TODO: save to backend
}

export function loadPlayersIntoState(setPlayersState: Dispatch<SetStateAction<Player[]>>, debugPlayers: Player[] = []) {
    if (debugPlayers.length > 0) {
        setPlayersState(debugPlayers);
    } else {
        // TODO: fetch from backend
        let players: Player[] = [];
        setPlayersState(players);
    }
}