import "./WilliesDistribution.css";
import {Link, useNavigate} from "react-router";
import {Player} from "../Models/Player.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-distribution">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-distribution">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function WilliesDistribution (){
    const tourneyStore = useTourneyStore.getState();
    const navigate = useNavigate();

    function getWilliesPerMatchRank(p: Player) {
        switch (p.matchRank) {
            case 1:
                return 0;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 5;
            default:
                return -1;
        }
    }

    function proceed() {
        tourneyStore.proceedToNextMatch();
        navigate("/RoundDisplay");
    }

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Willies Distribution</h1>
            </div>
            <div className="main-content distribution">
                {tourneyStore.isLastRound() && <h1 style={{alignSelf: "center"}}>Last Round, no willies!</h1>}
                {!tourneyStore.isLastRound() && tourneyStore.matchParticipants.map((p, i) =>
                    <div key={i} className="distribution-line">
                        <PlayerBadge player={p}/><span>gets <b>{getWilliesPerMatchRank(p)}</b> Willies</span>
                    </div>
                )}
            </div>
            <div className="footer">
                <button className="big-button" onClick={proceed}>Next Match</button>
            </div>
        </div>
    );
}