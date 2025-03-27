import "./DongleBoard.css"
import {Player} from "../Models/Player.tsx";

function PlayerRow({player, rank}: {player: Player, rank: number}) {
    let color = player.playedThisRound ? "red" : "green"

    return (
        <div className="leaderboard-row">
            <label>{rank}</label>
            <div className="leaderboard-row-player">
                <div className="name-tag">
                    <label style={{color: color}}>{player.name ? player.name : "unnamed"}</label>
                </div>
            </div>
            <label className="leaderboard-row-score">{player.score}</label>
        </div>
    )
}

export default function DongleBoard({players}: {players: Player[]}) {
    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <b>Rank</b>
                <b>Player</b>
                <b>Score</b>
            </div>
            {/*Max 20*/}
            <div className="leaderboard-rows">
                {players.map((p, i) => <PlayerRow key={i} player={p} rank={i+1}/>)}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
                {/*<PlayerRow player={new Player()}/>*/}
            </div>
        </div>
    );
}