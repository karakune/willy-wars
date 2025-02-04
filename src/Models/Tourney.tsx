// import {Game} from "./Game.tsx";
import {Player} from "./Player.tsx";
import {Dispatch, SetStateAction} from "react";

export class Tourney {
    getCurrentMatchInfo() {
        return {
            game: "Goon Troop",
            round: 1,
            participants: [
                new Player("Steve"),
                new Player("Joey"),
                new Player("Suzie"),
                new Player("Saint-Petersburg")
            ]
        }
    }
}

export function loadTourneyIntoState(setTourneyState: Dispatch<SetStateAction<Tourney | undefined>>) {
    // TODO: fetch from backend
    setTourneyState(new Tourney());
}