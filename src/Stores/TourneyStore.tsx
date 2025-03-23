import {create} from "zustand";
import {Player} from "../Models/Player.tsx";
import {Game} from "../Models/Game.tsx";

interface TourneyStore {
    players: Player[],
    games: Game[],
    currentRound: number,
    currentMatch: number,
    matchParticipants: Player[],
    currentGame: Game,

    setPlayers: (players: Player[]) => void,
    setGames: (games: Game[]) => void,
    startNewTourney: () => void,

    addScores: (participants: Player[]) => void,
    proceedToNextMatch: () => void,
    isLastMatch: () => boolean
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
    currentMatch: 1,
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
            currentMatch: 1,
            matchParticipants: this.players.slice(0, 4)
        });
    },

    addScores: function(participants: Player[]) {
        let players = this.players;
        let matchBonus = getMatchBonus();

        console.log(participants);
        for (let participant of participants) {
            switch (participant.matchRank) {
                case 1:
                    participant.score += Math.round((4 + matchBonus) * 10) / 10;
                    break;
                case 2:
                    participant.score += Math.round((3 + matchBonus) * 10) / 10;
                    break;
                case 3:
                    participant.score += Math.round((2 + matchBonus) * 10) / 10;
                    break;
                case 4:
                    participant.score += Math.round((1 + matchBonus) * 10) / 10;
                    break;
                default:
                    console.error("Invalid ranking. Expected 1 to 4, got " + participant.matchRank);
                    break;
            }

            players.map(player => {
                if (player.name === participant.name) {
                    player.score = participant.score;
                }
            });
        }

        // Sort players by score, descending
        players.sort((a, b) => {
            return b.score - a.score;
        });

        set({players: players});
    },

    proceedToNextMatch: function () {
        if (this.games.length == 0 || this.currentGame == null) {
            console.error("Tourney not active");
            return;
        }

        let players = this.players.map(p => {
            p.matchRank = 0;
            return p;
        });

        set({players: players});

        if (this.currentMatch < 4) {
            set({currentMatch: this.currentMatch + 1});
        } else {
            if (this.currentRound == 2) {
                pickNextGame();
                set({currentMatch: 1, currentRound: 1});
            } else {
                set({currentMatch: 1, currentRound: 2});
            }
        }

        pickNextParticipants();
    },

    isLastRound: function () : boolean {
        if (this.games.length == 0 || this.currentGame == null) {
            console.error("Tourney not active");
            return false;
        }

        return this.currentRound == 2 && this.currentGame === this.games[this.games.length - 1];
    },

    isLastMatch: function () : boolean {
        if (this.games.length == 0 || this.currentGame == null) {
            console.error("Tourney not active");
            return false;
        }

        return this.currentMatch == 4 && this.isLastRound();
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

const getMatchBonus = () => {
    let match = useTourneyStore.getState().currentMatch;
    switch (match) {
        case 1:
            return 0.4;
        case 2:
            return 0.3;
        case 3:
            return 0.2;
        case 4:
            return 0.1;
        default:
            console.error("Invalid match number. Expected 1 to 4, got " + match);
            return 0.0;
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