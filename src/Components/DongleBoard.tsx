import "./DongleBoard.css"
import PlayerBadge from "./PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerRow({player}: {player: Player}) {
    return (
        <div className="leaderboard-row">
            <label>{player.rank}</label>
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
            <b>Rank</b>
            <b>Player</b>
            <b>Score</b>
            {/*{players.map(p => <PlayerRow player={p}/>)}*/}
            <PlayerRow player={new Player()}/>
            <PlayerRow player={new Player()}/>
            <PlayerRow player={new Player()}/>
            <PlayerRow player={new Player()}/>
            <PlayerRow player={new Player()}/>
        </div>
    );
}