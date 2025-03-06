import "./SubmitScores.css"
import {Link} from "react-router";
// import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerEntry() {
    return (
        <div>
            <PlayerBadge player={new Player()}/>
            <input className="submit-score-input" type="number" min="0" step="1"/>
        </div>
    )
}

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-submit">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-submit">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function SubmitScores (){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>Submit Scores</h1>
            </div>
            <div className="main-content submit-scores">
                <PlayerEntry/>
                <PlayerEntry/>
                <PlayerEntry/>
                <PlayerEntry/>
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