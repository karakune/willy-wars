import "../App.css";
import {Link} from "react-router";
import {Player} from "../Models/Player.tsx";
import DongleBoard from "../Components/DongleBoard.tsx";
import RoundParticipants from "../Components/RoundParticipants.tsx";
import {Tourney} from "../Models/Tourney.tsx";

export default function RoundDisplay ({players, tourney}: {players: Player[], tourney: Tourney }){
    return (
        <>
            <h1>WILLY WARS</h1>
            <div className="mainArea">
                <div className="column-round">
                    <h2 style={{marginTop: 0, marginBottom: 0}}>{tourney.getCurrentMatchInfo().game}</h2>
                    <h3 style={{marginTop: 0, marginBottom: 0}}>Round {tourney.getCurrentMatchInfo().round}</h3>
                    <RoundParticipants participants={tourney.getCurrentMatchInfo().participants}/>
                    <Link to="/SubmitScores">
                        <button className="big-button" style={{margin: 10}}>Submit Scores</button>
                    </Link>
                </div>
                <div className="column-round">
                    <h2 style={{marginTop: 0, marginBottom: 24}}>Dongle Board</h2>
                    <DongleBoard players={players}/>
                </div>
            </div>
            <div className="bottomArea lowerLeft">
                <Link to="/FixAMistake">
                    <button>Fix a Mistake</button>
                </Link>
                <Link to="/">
                    <button>Back to title</button>
                </Link>
            </div>
        </>
    );
}