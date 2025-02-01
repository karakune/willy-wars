import "../App.css";
import {Link} from "react-router";

export default function SubmitScores (){
    return (
        <div>
            <h1>Submit Scores</h1>
            <div className="row">
                <Link to="/RoundDisplay">
                    <button>Nevermind</button>
                </Link>
                <Link to="/WilliesDistribution">
                    <button>Round Over</button>
                </Link>
                <Link to="/FinalResults"> {/* TODO: choose between WilliesDistribution or FinalResults based on round #*/}
                    <button>Tourney Over</button>
                </Link>
            </div>
        </div>
    );
}