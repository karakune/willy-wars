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
        <>
            <h1>WILLY WARS</h1>
            <div className="mainArea">
                <img src={landingPic} className="landingPic"/>
            </div>
            <div className="bottomArea">
                <button onClick={confirmNew}>New Tourney</button>
                <Link to="/RoundDisplay">
                    <button>Pick up where ya left off</button>
                </Link>
            </div>
        </>
    );
}