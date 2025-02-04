import {Dispatch, SetStateAction} from "react";

export class Game {
    public name: string = "";
    public banner: any;
}

export function saveGames(games: Game[]) {
    // TODO: save to backend
}

export function loadGamesIntoState(setGamesState: Dispatch<SetStateAction<Game[]>>, debugGames: Game[] = []) {
    if (debugGames.length > 0) {
        setGamesState(debugGames);
    } else {
        // TODO: fetch from backend
        let games: Game[] = [];
        setGamesState(games);
    }
}