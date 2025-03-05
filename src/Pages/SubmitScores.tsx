import "./SubmitScores.css"
import {Link} from "react-router";
import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerEntry() {
    return (
        <div className="column" style={{alignItems:"center", minWidth: "0", gap:"2em"}}>
            <PlayerBadge player={new Player()}/>
            <input className="submit-score-input" type="number" min="0" step="1"/>
        </div>
    )
}

export default function SubmitScores (){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>Submit Scores</h1>
            </div>
            <div className="main-content submit-scores">
                <PlayerBadge player={new Player()}/>
                <PlayerBadge player={new Player()}/>
                <PlayerBadge player={new Player()}/>
                <PlayerBadge player={new Player()}/>
                <input className="submit-score-input" type="number" min="0" step="1"/>
                <input className="submit-score-input" type="number" min="0" step="1"/>
                <input className="submit-score-input" type="number" min="0" step="1"/>
                <input className="submit-score-input" type="number" min="0" step="1"/>
                <div className="over-buttons">
                    <Link to="/WilliesDistribution">
                        <button style={{fontSize: "large"}}>Round Over</button>
                    </Link>
                    <Link
                          to="/FinalResults"> {/* TODO: choose between WilliesDistribution or FinalResults based on round #*/}
                        <button className="big-button">Tourney Over</button>
                    </Link>
                </div>
            </div>
            <div className="footer">
                <Link to="/RoundDisplay">
                    <button>Nevermind</button>
                </Link>
            </div>
        </div>
    );
}