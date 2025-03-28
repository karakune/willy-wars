import "./AppLayout.css";
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "../Pages/LandingPage.tsx";
import PlayersAdd from "../Pages/PlayersAdd.tsx";
import GamesAdd from "../Pages/GamesAdd.tsx";
import RoundDisplay from "../Pages/RoundDisplay.tsx";
import SubmitScores from "../Pages/SubmitScores.tsx";
import WilliesDistribution from "../Pages/WilliesDistribution.tsx";
import FinalResults from "../Pages/FinalResults.tsx";
import FixAMistake from "../Pages/FixAMistake.tsx";
import {useEffect, useState} from "react";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";
import {BaseDirectory, readTextFile} from "@tauri-apps/plugin-fs";


export default function AppLayout() {
    const [isDataLoaded, setDataLoaded] = useState(false);
    const tourneyStore = useTourneyStore;

    useEffect(() => {
        readTextFile("save.json", {baseDir: BaseDirectory.AppCache})
            .then((text) => {
                let asJson = JSON.parse(text);
                tourneyStore.setState({
                    players: asJson.players,
                    games: asJson.games,
                    currentRound: asJson.currentRound,
                    currentMatch: asJson.currentMatch,
                    matchParticipants: asJson.matchParticipants,
                    currentGame: asJson.currentGame,
                    matches: asJson.matches,
                    isTourneyOver: asJson.isTourneyOver
                })
            })
            .catch(() => {
                tourneyStore.getState().save();
            })
            .finally(() => {
                setDataLoaded(true);
            });
    }, [isDataLoaded]);

    function SetupRoutes() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/PlayersAdd" element={<PlayersAdd/>}/>
                    <Route path="/GamesAdd" element={<GamesAdd/>}/>
                    <Route path="/RoundDisplay" element={<RoundDisplay/>}/>
                    <Route path="/SubmitScores" element={<SubmitScores/>}/>
                    <Route path="/WilliesDistribution" element={<WilliesDistribution/>}/>
                    <Route path="/FinalResults" element={<FinalResults/>}/>
                    <Route path="/FixAMistake" element={<FixAMistake/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <>
            {!isDataLoaded && <label>loading...</label>}
            {isDataLoaded && <SetupRoutes/>}
        </>
    );
}