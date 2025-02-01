import "../App.css";
import {Link} from "react-router";

export default function WilliesDistribution (){
    return (
        <div>
            <h1>Willies Distribution</h1>
            <div className="row">
                <Link to="/RoundDisplay">
                    <button>Next Round</button>
                </Link>
            </div>
        </div>
    );
}