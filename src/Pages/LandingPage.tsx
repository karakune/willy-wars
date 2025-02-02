import "../App.css";
import landingPic from "../assets/LandingPic.jpg";
import {Link, useNavigate} from "react-router";
import ConfirmationPopup from '../ConfirmationPopup.tsx'

export default function LandingPage (){
    const navigate = useNavigate();

    const confirmNew = async function() {
        if (await ConfirmationPopup("A Willy Wars is ongoing, terminate it?", "Nah", "Yah")) {
            navigate("/PlayersAdd");
        }
    };

    return (
        <div>
            <h1>WILLY WARS</h1>
            <img src={landingPic} className="landingPic"/>
            <div className="row">
                <button onClick={confirmNew}>New Tourney</button>
                <Link to="/RoundDisplay">
                    <button>Pick up where ya left off</button>
                </Link>
            </div>
        </div>
    );
}