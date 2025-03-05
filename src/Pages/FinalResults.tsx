import "./FinalResults.css";
import {Link} from "react-router";
import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

export default function FinalResults(){

    function TopThree({player, position}: {player: Player, position: number}) {
        let classes = "top-three ";
        let title: string;
        switch (position) {
            case 1:
                classes += " first";
                title = "Biggest Willy";
                break;
            case 2:
                classes += " second";
                title = "2nd Place";
                break;
            case 3:
                classes += " third";
                title = "Chunky Chungus";
                break;
            default:
                return null;
        }
        return (
            <div className={classes}>
                <span className="title">{title}</span>
                <img src={player.avatar} alt="player avatar"/>
                <span className="player-name">{player.name ? player.name : "unnamed"}</span>
            </div>
        )
    }

    function LeaderboardColumn() {
        const rows = [];
        for (let i = 0; i < 3; i++) {
            let player = new Player();
            let startRow = (2 + i).toString();
            rows.push(
                <div key={i} className="leaderboard-column" style={{gridColumn: "1 / span 3", gridRowStart: startRow}}>
                    <span style={{gridColumnStart: "1", gridRowStart: "1", display:"flex", justifyContent:"center", alignItems:"center"}}>{player.rank}</span>
                    <div style={{gridColumnStart: "2", gridRowStart: "1"}}>
                        <PlayerBadge player={player}/>
                    </div>
                    <span style={{gridColumnStart: "3", gridRowStart: "1", display:"flex", justifyContent:"center", alignItems:"center"}}>{player.score}</span>
                </div>
            );
        }
        return (
            <div className="leaderboard-column">
                <b style={{gridColumnStart: "1", gridRowStart: "1"}}>Rank</b>
                <b style={{gridColumnStart: "2", gridRowStart: "1"}}>Player</b>
                <b style={{gridColumnStart: "3", gridRowStart: "1"}}>Score</b>
                {rows}
            </div>
        );
    }

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Final Results</h1>
            </div>
            <div className="main-content">
                <div className="column">
                    <div className="row" style={{justifyContent: "space-evenly"}}>
                        <TopThree player={new Player()} position={2}/>
                        <TopThree player={new Player()} position={1}/>
                        <TopThree player={new Player()} position={3}/>
                    </div>
                    <h2 style={{marginBottom: "0.3em"}}>The Dongle Board</h2>
                    <div className="leaderboard-final">
                        <LeaderboardColumn/>
                        <LeaderboardColumn/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Link to="/">
                    <button>GG</button>
                </Link>
            </div>
        </div>
    );
}