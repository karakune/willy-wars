import "../App.css";
import {Link} from "react-router";

export default function GamesAdd (){
    return (
        <div>
            <h1>Enter Games</h1>
            <div className="row">
                <Link to="/PlayersAdd">
                    <button>Back</button>
                </Link>
                <Link to="/RoundDisplay">
                    <button>Ok we're done</button>
                </Link>
            </div>
        </div>
    );
}