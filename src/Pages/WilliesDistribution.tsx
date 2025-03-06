import "./WilliesDistribution.css";
import {Link} from "react-router";
// import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-distribution">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-distribution">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function WilliesDistribution (){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>Willies Distribution</h1>
            </div>
            <div className="main-content distribution">
                <div className="distribution-line">
                    <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                </div>
                <div className="distribution-line">
                    <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                </div>
                <div className="distribution-line">
                    <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                </div>
                <div className="distribution-line">
                    <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                </div>
            </div>
            <div className="footer">
                <Link to="/RoundDisplay">
                    <button className="big-button">Next Round</button>
                </Link>
            </div>
        </div>
    );
}