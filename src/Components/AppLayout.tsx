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


export default function AppLayout() {
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
        <SetupRoutes/>
    );
}