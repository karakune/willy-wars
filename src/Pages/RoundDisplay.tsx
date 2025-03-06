import "./RoundDisplay.css"
import {Link} from "react-router";
import {Player} from "../Models/Player.tsx";
import DongleBoard from "../Components/DongleBoard.tsx";
import {Tourney} from "../Models/Tourney.tsx";
import PlayerBadge from "../Components/PlayerBadge.tsx";

export default function RoundDisplay ({players, tourney}: {players: Player[], tourney: Tourney }){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>WILLY WARS</h1>
            </div>
            <div className="main-content round-display">
                <h2>{tourney.getCurrentMatchInfo().game}</h2>
                <h2>Dongle Board</h2>
                <div className="round-participants">
                    <h3 className="round-participants-header">Round {tourney.getCurrentMatchInfo().round}</h3>
                    <div className="round-participants-content">
                        <label className="round-participants-vs">VS</label>
                        <div className="round-participants-badges">
                            {tourney.getCurrentMatchInfo().participants.map((p, i) =>
                                <PlayerBadge key={i} player={p}/>)}
                        </div>
                        <div className="submit-scores-button">
                            <Link to="/SubmitScores">
                                <button className="big-button" style={{margin: 10}}>Submit Scores</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dongle-board">
                    <DongleBoard players={players}/>
                </div>

                {/*<div className="column-round">*/}
                {/*    <h2 style={{marginTop: 0, marginBottom: 0}}>{tourney.getCurrentMatchInfo().game}</h2>*/}
                {/*    <h3 style={{marginTop: 0, marginBottom: 0}}>Round {tourney.getCurrentMatchInfo().round}</h3>*/}
                {/*    <RoundParticipants participants={tourney.getCurrentMatchInfo().participants}/>*/}
                {/*    <Link to="/SubmitScores">*/}
                {/*        <button className="big-button" style={{margin: 10}}>Submit Scores</button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="column-round">*/}
                {/*    <h2 style={{marginTop: 0, marginBottom: 24}}>Dongle Board</h2>*/}
                {/*    <DongleBoard players={players}/>*/}
                {/*</div>*/}
            </div>
            <div className="footer">
                <Link to="/FixAMistake">
                    <button>Fix a Mistake</button>
                </Link>
                <Link to="/">
                    <button>Back to title</button>
                </Link>
            </div>
        </div>
        // <>
        //     <h1>WILLY WARS</h1>
        //     <div className="mainArea">
        //         <div className="column-round">
        //             <h2 style={{marginTop: 0, marginBottom: 0}}>{tourney.getCurrentMatchInfo().game}</h2>
        //             <h3 style={{marginTop: 0, marginBottom: 0}}>Round {tourney.getCurrentMatchInfo().round}</h3>
        //             <RoundParticipants participants={tourney.getCurrentMatchInfo().participants}/>
        //             <Link to="/SubmitScores">
        //                 <button className="big-button" style={{margin: 10}}>Submit Scores</button>
        //             </Link>
        //         </div>
        //         <div className="column-round">
        //             <h2 style={{marginTop: 0, marginBottom: 24}}>Dongle Board</h2>
        //             <DongleBoard players={players}/>
        //         </div>
        //     </div>
        //     <div className="bottomArea lowerLeft">
        //         <Link to="/FixAMistake">
        //             <button>Fix a Mistake</button>
        //         </Link>
        //         <Link to="/">
        //             <button>Back to title</button>
        //         </Link>
        //     </div>
        // </>
    );
}