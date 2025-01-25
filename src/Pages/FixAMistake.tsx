import "../App.css";
import {Link} from "react-router";

export default function FixAMistake (){
    return (
        <div>
            <h1>Fix A Mistake</h1>
            <div className="row">
                <Link to="/RoundDisplay">
                    <button>Done</button>
                </Link>
            </div>
        </div>
    );
}