import "./LandingPage.css";
import "../Components/AppLayout.css"
import landingPic from "../assets/LandingPic.jpg";
import {Link, useNavigate} from "react-router";
// import ConfirmationPopup from '../ConfirmationPopup.tsx'

export default function LandingPage(){
    const navigate = useNavigate();

    const confirmNew = async function() {
        // if (await ConfirmationPopup("A Willy Wars is ongoing, terminate it?", "Nah", "Yah")) {
            navigate("/PlayersAdd");
        // }
    };

    return (
        <div className="app-layout">
            <div className="header">
                <h1>WILLY WARS</h1>
            </div>
            <div className="main-content">
                <img style={{height:"100%"}} src={landingPic} alt="landing pic"/>
            </div>
            <div className="footer">
                <Link to="/RoundDisplay">
                    <button>Pick up where ya left off</button>
                </Link>
                <button onClick={confirmNew}>New Tourney</button>
            </div>
        </div>
    );
}