import "./AppLayout.css";
import React, {useState} from "react";
import {loadPlayersIntoState, Player, savePlayers} from "../Models/Player.tsx";
import {Game, loadGamesIntoState, saveGames} from "../Models/Game.tsx";
import {loadTourneyIntoState, Tourney} from "../Models/Tourney.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "../Pages/LandingPage.tsx";
import PlayersAdd from "../Pages/PlayersAdd.tsx";
import GamesAdd from "../Pages/GamesAdd.tsx";
import RoundDisplay from "../Pages/RoundDisplay.tsx";
import SubmitScores from "../Pages/SubmitScores.tsx";
import WilliesDistribution from "../Pages/WilliesDistribution.tsx";
import FinalResults from "../Pages/FinalResults.tsx";
import FixAMistake from "../Pages/FixAMistake.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";


export default function AppLayout() {
    function SetupRoutes() {
        const tourneyStore = useTourneyStore.getState();
        const [players, setPlayers] = useState<Array<Player>>(tourneyStore.players);
        const [games, setGames] = useState<Array<Game>>([]);
        const [tourney, setTourney] = useState<Tourney>();

        function onPlayersSubmitted(submitted: Player[]) {
            savePlayers(submitted);
            loadPlayersIntoState(setPlayers, submitted);
        }

        function onGamesSubmitted(submitted: Game[]) {
            saveGames(submitted);
            setTourney(new Tourney());
            loadGamesIntoState(setGames, submitted);
        }

        function getTourney(): Tourney {
            if (tourney == null) {
                loadTourneyIntoState(setTourney);
            }
            return tourney!;
        }

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/PlayersAdd" element={<PlayersAdd/>}/>
                    <Route path="/GamesAdd" element={<GamesAdd/>}/>
                    <Route path="/RoundDisplay" element={<RoundDisplay players={tourneyStore.players} tourney={getTourney()}/>}/>
                    <Route path="/SubmitScores" element={<SubmitScores/>}/>
                    <Route path="/WilliesDistribution" element={<WilliesDistribution/>}/>
                    <Route path="/FinalResults" element={<FinalResults/>}/>
                    <Route path="/FixAMistake" element={<FixAMistake/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <SetupRoutes/>
    );
}