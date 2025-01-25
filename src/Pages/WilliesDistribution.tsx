import "../App.css";
import {Link} from "react-router";

export default function WilliesDistribution (){
    return (
        <div>
            <h1>Willies Distribution</h1>
            <div className="row">
                <Link to="/RoundDisplay"> {/* TODO: choose between RoundDisplay or FinalResults based on round #*/}
                    <button>Next Round</button>
                </Link>
                <Link to="/FinalResults">
                    <button>Tourney Over</button>
                </Link>
            </div>
        </div>
    );
}