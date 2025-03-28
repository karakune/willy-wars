import "./LandingPage.css";
import "../Components/AppLayout.css"
import splashScreen from "../assets/SplashScreen.png"
import {useNavigate} from "react-router";
import ConfirmationPopup from '../Components/ConfirmationPopup.tsx'
import {useState} from "react";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";

export default function LandingPage(){
    const tourneyStore = useTourneyStore.getState();
    const [showConfirmNew, setShowConfirmNew] = useState(false);
    const navigate = useNavigate();

    function resumeTourney() {
        if (tourneyStore.isTourneyOver) {
            navigate("/FinalResults");
        } else {
            navigate("/RoundDisplay")
        }
    }

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
                <button onClick={() => resumeTourney()}>Pick up where ya left off</button>
                <button onClick={() => setShowConfirmNew(true)}>New Tourney</button>
            </div>
        </div>
    );
}