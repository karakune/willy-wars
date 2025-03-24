import "./LandingPage.css";
import "../Components/AppLayout.css"
import splashScreen from "../assets/SplashScreen.png"
import {Link, useNavigate} from "react-router";
import ConfirmationPopup from '../Components/ConfirmationPopup.tsx'
import {useState} from "react";

export default function LandingPage(){
    const [showConfirmNew, setShowConfirmNew] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="app-layout">
            <ConfirmationPopup isOpen={showConfirmNew} setOpen={setShowConfirmNew}
                               onConfirm={() => navigate("/PlayersAdd")} onCancel={() => {}}
                               title="A Willy Wars is ongoing, terminate it?" description=""
                               confirmMessage="Yah" cancelMessage="Nah"
            />
            <div className="header">

            </div>
            <div className="main-content splash-screen">
                <img src={splashScreen} alt="splash screen"/>
            </div>
            <div className="footer options">
                <Link to="/RoundDisplay">
                    <button>Pick up where ya left off</button>
                </Link>
                <button onClick={() => setShowConfirmNew(true)}>New Tourney</button>
            </div>
        </div>
    );
}