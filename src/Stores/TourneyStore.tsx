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
    matches: Player[][],

    setPlayers: (players: Player[]) => void,
    setGames: (games: Game[]) => void,
    startNewTourney: () => void,

    addScores: (participants: Player[]) => void,
    proceedToNextMatch: () => void,
    isLastMatch: () => boolean
    isLastRound: () => boolean
}

const debugGetDefaultPlayers = () => {
    return [
        new Player("Steve"), new Player("Joey"), new Player("Suzie"), new Player("Saint-Petersburg"),
        new Player("Douglas"), new Player("Jonas"), new Player("Marco"), new Player("Anthony"),
        new Player("Sally"), new Player("Craig"), new Player("Bonnie"), new Player("Marie"),
        new Player("Bertrand"), new Player("Arnaud"), new Player("Chancey"), new Player("Michael"),
        new Player("Laurent"), new Player("Big Mac"), new Player("Daniel"), new Player("Justin"),
    ];
}

const debugGetDefaultGames = () => {
    return [new Game("Goon Troop", "tank"), new Game("Mario Kart", "snake"), new Game("Frogger", "unspot")];
}

export const useTourneyStore = create<TourneyStore>()((set, get) => ({
    players: debugGetDefaultPlayers(),
    games: debugGetDefaultGames(),
    currentRound: 1,
    currentMatch: 1,
    matchParticipants: debugGetDefaultPlayers().slice(0, 4),
    currentGame: debugGetDefaultGames()[0],
    matches: [],

    setPlayers: function(players: Player[]) {
        set({players: players});
    },

    setGames: function(games: Game[]) {
        set({games: games});
    },

    startNewTourney: function() {
        shufflePlayers(this.players);

        let matches = createMatches(this.players);

        set({
            currentGame: this.games[0],
            currentRound: 1,
            currentMatch: 1,
            matches: matches,
            matchParticipants: matches[0]
        });
    },

    addScores: function(participants: Player[]) {
        let players = this.players;
        let matchBonus = getMatchBonus();

        for (let participant of participants) {
            switch (participant.matchRank) {
                case 1:
                    participant.score += 4000 + matchBonus;
                    break;
                case 2:
                    participant.score += 3000 + matchBonus;
                    break;
                case 3:
                    participant.score += 2000 + matchBonus;
                    break;
                case 4:
                    participant.score += 1000 + matchBonus;
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

        // Same round
        if (this.currentMatch < this.matches.length) {
            set({currentMatch: this.currentMatch + 1});
        }
        // New Round
        else {
            // Players have been sorted by this point

            // Same Game
            if (this.currentRound != 2) {
                let newMatches = createMatches(players);
                set({currentMatch: 1, currentRound: 2, matches: newMatches});
            }
            // New Game
            else {
                let nextGameIndex = this.games.indexOf(this.currentGame) + 1;

                // Put the matches in reverse order in the last game's last round
                let isLastRound = nextGameIndex == this.games.length - 1;
                if (isLastRound) {
                    players.reverse();
                }

                let newMatches = createMatches(players);

                set({currentGame: this.games[nextGameIndex], currentMatch: 1, currentRound: 1, matches: newMatches});
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

        return this.currentMatch <= this.matches.length && this.isLastRound();
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

const createMatches = (players: Player[]) => {
    let matches = [];
    for (let i = 0; i < players.length; i += 4) {
        let match = [];
        for (let j = i; j < players.length && j < i + 4; j++) {
            match.push(players[j]);
        }
        matches.push(match);
    }

    return matches;
}

const getMatchBonus = () => {
    let store = useTourneyStore.getState();
    let game = store.games.indexOf(store.currentGame);
    let round = store.currentRound;
    let match = store.currentMatch;

    if (game === 0 && round == 1) {
        return 0;
    }

    switch (match) {
        case 1:
            return 400;
        case 2:
            return 300;
        case 3:
            return 200;
        case 4:
            return 100;
        default:
            console.error("Invalid match number. Expected 1 to 4, got " + match);
            return 0;
    }
}

const pickNextParticipants = () => {
    let store = useTourneyStore.getState();
    let matches = store.matches;

    useTourneyStore.setState({matchParticipants: matches[store.currentMatch - 1]});
}