import "../App.css";
import {Link} from "react-router";
import {Player} from "../Player.tsx";
import {Game} from "../Game.tsx";
import DongleBoard from "../Components/DongleBoard.tsx";
import RoundParticipants from "../Components/RoundParticipants.tsx";

export default function RoundDisplay ({players, games}: {players: Player[], games: Game[] }){
    return (
        <>
            <h1>WILLY WARS</h1>
            <div className="mainArea">
                <div className="column">
                    <h2 style={{marginTop: 0, marginBottom: 0}}>Game 1</h2>
                    <h3 style={{marginTop: 0, marginBottom: 0}}>Round 1</h3>
                    <RoundParticipants/>
                    {/*<ul>*/}
                    {/*    {players.map(p => (*/}
                    {/*        <li key={p.name}>{p.name}</li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                    <Link to="/SubmitScores">
                        <button style={{margin: 10}}>Submit Scores</button>
                    </Link>
                </div>
                <div className="column">
                    <h2 style={{marginTop: 0, marginBottom: 24}}>Dongle Board</h2>
                    <DongleBoard/>
                    {/*<ul>*/}
                    {/*    {games.map(g => (*/}
                    {/*        <li key={g.name}>{g.name}</li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </div>
            </div>
            <div className="bottomArea lowerLeft">
                <Link to="/FixAMistake">
                    <button>Fix a Mistake</button>
                </Link>
                <Link to="/">
                    <button>Quit</button>
                </Link>
            </div>
        </>
    );
}