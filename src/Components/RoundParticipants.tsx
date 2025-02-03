import PlayerBadge from "./PlayerBadge.tsx";
import {Player} from "../Player.tsx";

export default function RoundParticipants() {
    return (
        <div className="roundParticipants">
            <PlayerBadge player={new Player()}/>
        </div>
    );
}