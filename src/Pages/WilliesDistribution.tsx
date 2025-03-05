import "./WilliesDistribution.css";
import {Link} from "react-router";
import PlayerBadge from "../Components/PlayerBadge.tsx";
import {Player} from "../Models/Player.tsx";

export default function WilliesDistribution (){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>Willies Distribution</h1>
            </div>
            <div className="main-content">
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
            <div className="footer">
                <Link to="/RoundDisplay">
                    <button className="big-button">Next Round</button>
                </Link>
            </div>
        </div>
    );
}