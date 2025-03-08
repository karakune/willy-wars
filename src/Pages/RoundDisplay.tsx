import "./RoundDisplay.css"
import {Link} from "react-router";
import {Player} from "../Models/Player.tsx";
import DongleBoard from "../Components/DongleBoard.tsx";
import {Tourney} from "../Models/Tourney.tsx";

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-round">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-round">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function RoundDisplay ({players, tourney}: {players: Player[], tourney: Tourney }){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>WILLY WARS</h1>
            </div>
            <div className="main-content round-display">
                <h2>{tourney.getCurrentMatchInfo().game}</h2>
                <h2>Dongle Board</h2>
                <div className="match-participants">
                    <h3 className="match-participants-header">Round {tourney.getCurrentMatchInfo().round}</h3>
                    <div className="match-participants-content">
                        <label className="match-participants-vs">VS</label>
                        <div className="match-participants-badges">
                            {tourney.getCurrentMatchInfo().participants.map((p, i) =>
                                <PlayerBadge key={i} player={p}/>)}
                        </div>
                        <div className="submit-scores-button">
                            <Link to="/SubmitScores">
                                <button className="big-button" style={{margin: 10}}>Submit Scores</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dongle-board">
                    <DongleBoard players={players}/>
                </div>
            </div>
            <div className="footer lower-left">
                <Link to="/FixAMistake">
                    <button className="small-button" style={{marginRight: "1em"}}>Fix a Mistake</button>
                </Link>
                <Link to="/">
                    <button className="small-button">Back to title</button>
                </Link>
            </div>
        </div>
    );
}