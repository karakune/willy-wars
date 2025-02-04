import PlayerBadge from "./PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

export default function RoundParticipants({participants}: {participants: Player[]}) {
    return (
        <div className="round-participants">
            <label className="round-participants-vs">VS</label>
            <div className="round-participants-badges">
                {participants.map(p => <PlayerBadge player={p}/>)}
            </div>
        </div>
    );
}