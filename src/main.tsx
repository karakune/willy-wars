import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./Pages/LandingPage.tsx"
import PlayersAdd from "./Pages/PlayersAdd.tsx"
import GamesAdd from "./Pages/GamesAdd.tsx"
import RoundDisplay from "./Pages/RoundDisplay.tsx"
import SubmitScores from "./Pages/SubmitScores.tsx"
import WilliesDistribution from "./Pages/WilliesDistribution.tsx"
import FinalResults from "./Pages/FinalResults.tsx"
import FixAMistake from "./Pages/FixAMistake.tsx"
import {BrowserRouter, Route, Routes} from "react-router";
import {useState} from "react";
import {Player} from "./Player.tsx";
import {Game} from "./Game.tsx";

function SetupRoutes() {
    const [players, setPlayers] = useState<Array<Player>>([]);
    const [games, setGames] = useState<Array<Game>>([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/PlayersAdd" element={<PlayersAdd players={players}
                    onPlayersSubmitted={(submitted: Player[]) => setPlayers(submitted)}/>}/>
                <Route path="/GamesAdd" element={<GamesAdd games={games}
                    onGamesSubmitted={(submitted: Game[]) => setGames(submitted)}/>}/>
                <Route path="/RoundDisplay" element={<RoundDisplay players={players} games={games}/>}/>
                <Route path="/SubmitScores" element={<SubmitScores/>}/>
                <Route path="/WilliesDistribution" element={<WilliesDistribution/>}/>
                <Route path="/FinalResults" element={<FinalResults/>}/>
                <Route path="/FixAMistake" element={<FixAMistake/>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <main className="container">
          <SetupRoutes/>
      </main>
  </React.StrictMode>,
);
