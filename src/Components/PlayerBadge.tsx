import {Player} from "../Player.tsx";
import mushroom from "../assets/Mushroom.webp";

export default function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge">
            <img src={mushroom} alt="player avatar"/>
            <label>unnamed</label>
        </div>
    );
}