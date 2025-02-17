import "../App.css";
import {Link} from "react-router";
import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

function PlayerEntry() {
    return (
        <div className="column" style={{alignItems:"center", minWidth: "0", gap:"2em"}}>
            <PlayerBadge player={new Player()}/>
            <input style={{paddingRight: "0", paddingLeft: "0", width: "4em", textAlign:"center", marginLeft:"3em"}}
                   type="number" min="0" step="1"/>
        </div>
    )
}

export default function SubmitScores (){
    return (
        <>
            <h1>Submit Scores</h1>
            <div className="column" style={{gap:"5em", justifyContent:"center"}}>
                <div className="row">
                    <PlayerEntry/>
                    <PlayerEntry/>
                    <PlayerEntry/>
                    <PlayerEntry/>
                </div>
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <Link to="/WilliesDistribution">
                        <button style={{fontSize: "large"}}>Round Over</button>
                    </Link>
                    <Link
                        to="/FinalResults"> {/* TODO: choose between WilliesDistribution or FinalResults based on round #*/}
                        <button style={{fontSize: "large"}}>Tourney Over</button>
                    </Link>
                </div>
                <Link to="/RoundDisplay" style={{alignSelf:"flex-start", marginLeft: "3em"}}>
                    <button>Nevermind</button>
                </Link>
            </div>
        </>
    );
}