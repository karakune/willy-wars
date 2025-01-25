import "../App.css";
import {Link} from "react-router";

export default function PlayersAdd (){
    return (
        <div>
            <h1>Enter Players</h1>
            <div className="row">
                <Link to="/">
                    <button>Back</button>
                </Link>
                <Link to="/GamesAdd">
                    <button>Ok we're done</button>
                </Link>
            </div>
        </div>
    );
}