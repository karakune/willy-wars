import "../App.css";
import "./WilliesDistribution.css";
import {Link} from "react-router";
import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

export default function WilliesDistribution (){
    return (
        <div>
            <h1>Willies Distribution</h1>
            <div className="mainArea">
                <div className="column">
                    <div className="distribution-line">
                        <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                    </div>
                    <div className="distribution-line">
                        <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                    </div>
                    <div className="distribution-line">
                        <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                    </div>
                    <div className="distribution-line">
                        <PlayerBadge player={new Player()}/><span>gets <b>5</b> Willies</span>
                    </div>
                </div>
            </div>
            <div className="bottomArea">
                <Link to="/RoundDisplay">
                    <button className="big-button">Next Round</button>
                </Link>
            </div>
        </div>
    );
}