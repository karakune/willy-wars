import "./PlayersAdd.css"
import {Player} from "../Models/Player.tsx";
import {useState} from "react";
import {Link, useNavigate} from "react-router";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";

export default function PlayersAdd() {
    const tourneyStore = useTourneyStore.getState();
    const [players, setPlayers] = useState<Player[]>(tourneyStore.players);
    const [missingNameError, setMissingNameError] = useState(false);
    const [minPlayersError, setMinPlayersError] = useState(false);
    const [uniqueNamesError, setUniqueNamesError] = useState(false);

    const navigate = useNavigate();

    function displayErrorMessages() {
        let errors = [];

        if (missingNameError) {
            errors.push(<p className="error-message">All players must have a name</p>)
        }

        if (minPlayersError) {
            errors.push(<p className="error-message">Must have at least four players</p>)
        }

        if (uniqueNamesError) {
            errors.push(<p className="error-message">All player names must be unique</p>)
        }

        return (
            <>
                {errors}
            </>
        )
    }

    function onPlayerNameChanged(newName: string, index: number) {
        let updatedPlayers = players.map((p, i) => {
            if (i == index) {
                p.name = newName;
            }
            return p;
        });

        setPlayers(updatedPlayers);
    }

    function removePlayer(index: number) {
        setPlayers(players.filter((p, i) => i !== index));
    }

    function validatePlayers() : boolean {
        setMinPlayersError(false);
        setMissingNameError(false);
        setUniqueNamesError(false);

        if (players.length < 4) {
            setMinPlayersError(true);
            return false;
        }

        for (let player of players) {
            if (!player.name) {
                setMissingNameError(true);
                return false;
            }
        }

        if (new Set(players.map((p: Player) => p.name)).size !== players.length) {
            setUniqueNamesError(true)
            return false;
        }

        return true;
    }

    function submitPlayers() {
        if (!validatePlayers()) {
            return;
        }

        tourneyStore.setPlayers(players);

        navigate("/GamesAdd");
    }

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Enter Players</h1>
            </div>
            <div className="main-content scroll-view">
                {displayErrorMessages()}
                {players.map((player, i) => (
                    <div className="row" key={i}>
                        <input value={player.name} placeholder="Enter a name..." onChange={(e) => {
                            onPlayerNameChanged(e.target.value, i);
                        }}/>
                        <button type="button" onClick={() => removePlayer(i)}>✖</button>
                    </div>
                ))}
                <div className="row">
                    <button type="button" onClick={() => setPlayers([...players, new Player()])}>One more</button>
                </div>
            </div>
            <div className="footer add-options">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
                <button type="button" onClick={submitPlayers}>Ok we're done</button>
            </div>
        </div>
    );
}