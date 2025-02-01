import "../App.css";
import {Link} from "react-router";
import {Player} from "../Player.tsx";
import {Game} from "../Game.tsx";

export default function RoundDisplay ({players, games}: {players: Player[], games: Game[] }){
    return (
        <div>
            <h1>WILLY WARS</h1>
            <h2>Players</h2>
            <ul>
                {players.map(p => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
            <h2>Games</h2>
            <ul>
                {games.map(g => (
                    <li key={g.name}>{g.name}</li>
                ))}
            </ul>
            <div className="row">
                <Link to="/FixAMistake">
                    <button>Fix a Mistake</button>
                </Link>
                <Link to="/">
                    <button>Quit</button>
                </Link>
                <Link to="/SubmitScores">
                    <button>Submit Scores</button>
                </Link>
            </div>
        </div>
    );
}