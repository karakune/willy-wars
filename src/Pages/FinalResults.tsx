import "./FinalResults.css";
import {Link} from "react-router";
import {Player} from "../Models/Player.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";
import splashScreen from "../assets/SplashScreen.png"

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-final">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-final">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function FinalResults(){
    const tourneyStore = useTourneyStore.getState();

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
                <b>{player.score}</b>
            </div>
        )
    }

    function LeaderboardColumn({column}: {column: number}) {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            let index = 3 + (6 * column) + i;
            if (index >= tourneyStore.players.length) {
                break;
            }

            let player = tourneyStore.players[index];
            let startRow = (2 + i).toString();
            rows.push(
                <div key={i} className="leaderboard-column" style={{gridColumn: "1 / span 3", gridRowStart: startRow}}>
                    <span style={{gridColumnStart: "1", gridRowStart: "1", display:"flex", justifyContent:"center", alignItems:"center"}}>{index+1}</span>
                    <div style={{gridColumnStart: "2", gridRowStart: "1"}}>
                        <PlayerBadge player={player}/>
                    </div>
                    <span style={{gridColumnStart: "3", gridRowStart: "1", display:"flex", justifyContent:"center", alignItems:"center"}}>{player.score}</span>
                </div>
            );
        }
        return (
            <div className="leaderboard-column">
                <b style={{placeSelf: "center", gridColumnStart: "1", gridRowStart: "1"}}>Rank</b>
                <b style={{placeSelf: "center", gridColumnStart: "2", gridRowStart: "1"}}>Player</b>
                <b style={{placeSelf: "center", gridColumnStart: "3", gridRowStart: "1"}}>Score</b>
                {rows}
            </div>
        );
    }

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Final Results</h1>
            </div>
            <div className="main-content final-results" style={{backgroundImage: `url(${splashScreen})`}}>
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <TopThree player={tourneyStore.players[1]} position={2}/>
                    <TopThree player={tourneyStore.players[0]} position={1}/>
                    <TopThree player={tourneyStore.players[2]} position={3}/>
                </div>
                <h2>The Dongle Board</h2>
                <div className="leaderboard-final">
                    <LeaderboardColumn column={0}/>
                    <LeaderboardColumn column={1}/>
                    <LeaderboardColumn column={2}/>
                </div>
            </div>
            <div className="footer lower-right">
                <Link to="/">
                    <button className="small-button">GG</button>
                </Link>
            </div>
        </div>
    );
}