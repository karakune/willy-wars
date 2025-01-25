import "../App.css";
import {Link} from "react-router";

export default function RoundDisplay (){
    return (
        <div>
            <h1>WILLY WARS</h1>
            <div className="row">
                <Link to="/FixAMistake">
                    <button>Fix a Mistake</button>
                </Link>
                <Link to="/SubmitScores">
                    <button>Submit Scores</button>
                </Link>
            </div>
        </div>
    );
}