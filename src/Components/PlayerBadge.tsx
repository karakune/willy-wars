import "./PlayerBadge.css";
import {Player} from "../Models/Player.tsx";

export default function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}