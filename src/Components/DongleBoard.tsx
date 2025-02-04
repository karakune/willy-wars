import PlayerBadge from "./PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerRow({player}: {player: Player}) {
    return (
        <div className="leaderboard-row">
            <div className="leaderboard-row-player">
                <PlayerBadge player={player}/>
            </div>
            <label className="leaderboard-row-score">{player.score}</label>
        </div>
    )
}

export default function DongleBoard({players}: {players: Player[]}) {
    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <label className="leaderboard-header-player">Player</label>
                <label className="leaderboard-header-score">Score</label>
            </div>
            {players.map(p => <PlayerRow player={p}/>)}
            {/*<PlayerRow player={new Player()}/>*/}
            {/*<PlayerRow player={new Player()}/>*/}
            {/*<PlayerRow player={new Player()}/>*/}
            {/*<PlayerRow player={new Player()}/>*/}
            {/*<PlayerRow player={new Player()}/>*/}
        </div>
    );
}