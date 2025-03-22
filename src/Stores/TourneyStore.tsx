import {create} from "zustand";
import {Player} from "../Models/Player.tsx";
import {Game} from "../Models/Game.tsx";

interface TourneyStore {
    players: Player[],
    games: Game[],
    currentRound: number,
    matchParticipants: Player[],
    currentGame: Game,

    setPlayers: (players: Player[]) => void,
    setGames: (games: Game[]) => void,
    startNewTourney: () => void,

    proceedToNextRound: () => void,
    isLastRound: () => boolean
}

const debugGetDefaultPlayers = () => {
    return [new Player("Steve"), new Player("Joey"), new Player("Suzie"), new Player("Saint-Petersburg")];
}

const debugGetDefaultGames = () => {
    return [new Game("Goon Troop")];
}

export const useTourneyStore = create<TourneyStore>()((set, get) => ({
    players: debugGetDefaultPlayers(),
    games: debugGetDefaultGames(),
    currentRound: 1,
    matchParticipants: debugGetDefaultPlayers(),
    currentGame: debugGetDefaultGames()[0],

    setPlayers: function(players: Player[]) {
        set({players: players});
    },

    setGames: function(games: Game[]) {
        set({games: games});
    },

    startNewTourney: function() {
        shufflePlayers(this.players);

        set({
            currentGame: this.games[0],
            currentRound: 1,
            matchParticipants: this.players.slice(0, 4)
        });
    },

    proceedToNextRound: function () {
        if (this.games.length == 0 || this.currentGame == null) {
            console.error("Tourney not active");
            return;
        }

        if (this.currentRound == 2) {
            pickNextGame();
            set({currentRound: 1});
        } else {
            set({currentRound: 2});
        }

        pickNextParticipants();
    },

    isLastRound: function () : boolean {
        if (this.games.length == 0 || this.currentGame == null) {
            console.error("Tourney not active");
            return false;
        }

        return this.currentRound == 2 && this.currentGame === this.games[this.games.length - 1];
    }
}));

// Private functions

const shufflePlayers = (players: Player[]) => {
    let currentIndex = players.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [players[currentIndex], players[randomIndex]] = [players[randomIndex], players[currentIndex]];
    }
}

const pickNextGame = () => {
    let store = useTourneyStore.getState();
    let i = store.games.indexOf(store.currentGame);

    useTourneyStore.setState({currentGame: store.games[i+1]});
}

const pickNextParticipants = () => {
    //TODO: pick next participants

    // let store = useTourneyStore.getState();

    // useTourneyStore.setState({});
}