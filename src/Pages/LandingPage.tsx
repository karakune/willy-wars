import "../App.css";
import landingPic from "../assets/LandingPic.jpg";
import {Link} from "react-router";

export default function LandingPage (){
    return (
        <div>
            <h1>WILLY WARS</h1>
            <img src={landingPic} className="landingPic"/>
            <div className="row">
                <Link to="/PlayersAdd">
                    <button>New Tourney</button>
                </Link>
                <Link to="/RoundDisplay">
                    <button>Pick up where ya left off</button>
                </Link>
            </div>
        </div>
    );
}