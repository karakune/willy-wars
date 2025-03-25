import "./PlayersAdd.css"
import {Game} from "../Models/Game.tsx";
import {useState} from "react";
import {Link, useNavigate} from "react-router";
import ConfirmationPopup from "../Components/ConfirmationPopup.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";

export default function GamesAdd (){
    const tourneyStore = useTourneyStore.getState();
    const [games, setGames] = useState<Game[]>(tourneyStore.games);
    const [missingNameError, setMissingNameError] = useState(false);
    const [minGamesError, setMinGamesError] = useState(false);
    const [uniqueNamesError, setUniqueNamesError] = useState(false);
    const [showConfirmStart, setShowConfirmStart] = useState(false);

    const navigate = useNavigate();

    function displayErrorMessages() {
        let errors = [];

        if (missingNameError) {
            errors.push(<p className="error-message">All games must have a name</p>)
        }

        if (minGamesError) {
            errors.push(<p className="error-message">Must have at least one game</p>)
        }

        if (uniqueNamesError) {
            errors.push(<p className="error-message">All game names must be unique</p>)
        }

        return (
            <>
                {errors}
            </>
        )
    }

    function onGameNameChanged(newName: string, index: number) {
        let updatedGames = games.map((g, i) => {
            if (i == index) {
                g.name = newName;
            }
            return g;
        });

        setGames(updatedGames);
    }

    function removeGame(index: number) {
        setGames(games.filter((g, i) => i !== index));
    }

    function validateGames() : boolean {
        setMinGamesError(false);
        setMissingNameError(false);
        setUniqueNamesError(false);

        if (games.length < 1) {
            setMinGamesError(true);
            return false;
        }

        for (let game of games) {
            if (!game.name) {
                setMissingNameError(true);
                return false;
            }
        }

        if (new Set(games.map((g: Game) => g.name)).size !== games.length) {
            setUniqueNamesError(true)
            return false;
        }

        return true;
    }

    function confirmStart() {
        if (!validateGames()) {
            return;
        }

        setShowConfirmStart(true);
    }

    function submitGames() {
        tourneyStore.setGames(games);
        tourneyStore.startNewTourney();
        tourneyStore.save();
        navigate("/RoundDisplay");
    }

    return (
        <div className="app-layout">
            <ConfirmationPopup isOpen={showConfirmStart} setOpen={setShowConfirmStart}
                               onConfirm={submitGames} onCancel={() => {}}
                               title="Start the wars?" description={`You've got ${tourneyStore.players.length} players and ${games.length} games. Ready to start?`}
                               confirmMessage="Let's GOOOOO" cancelMessage="Hold up"
            />
            <div className="header">
                <h1>Enter Games</h1>
            </div>
            <div className="main-content scroll-view">
                {displayErrorMessages()}
                {games.map((game, i) => (
                    <div className="row" key={i}>
                        <input value={game.name} placeholder="Enter a name..." onChange={(e) => {
                            onGameNameChanged(e.target.value, i);
                        }}/>
                        <button type="button" onClick={() => removeGame(i)}>✖</button>
                    </div>
                ))}
                <div className="row">
                    <button type="button" onClick={() => setGames([...games, new Game()])}>One more</button>
                </div>
            </div>
            <div className="footer add-options">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
                <button type="button" onClick={confirmStart}>Ok we're done</button>
            </div>
        </div>
    );
}