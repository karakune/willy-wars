import "../App.css";
import {Link} from "react-router";

export default function FixAMistake(){
    return (
        <div className="app-layout">
            <div className="header">
                <h1>Fix-A-Mistake</h1>
            </div>
            <div className="main-content"></div>
            <div className="footer">
                <Link to="/RoundDisplay">
                    <button>Done</button>
                </Link>
            </div>
        </div>
    );
}