import {Dispatch, SetStateAction} from "react";
import mushroom from "../assets/Mushroom.webp";

export class Player {
    private _score: number = 0;
    public name: string = "";
    public avatar: string = mushroom;
    public matchRank: number = 0;

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