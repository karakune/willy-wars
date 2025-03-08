import "./LandingPage.css";
import "../Components/AppLayout.css"
import landingPic from "../assets/LandingPic.jpg";
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
                <h1>WILLY WARS</h1>
            </div>
            <div className="main-content">
                <img style={{height:"100%"}} src={landingPic} alt="landing pic"/>
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