import "./SubmitScores.css"
import {Link, useNavigate} from "react-router";
import {Player} from "../Models/Player.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";

function PlayerEntry({player}: {player: Player}) {
    return (
        <div>
            <PlayerBadge player={player}/>
            <input className="submit-score-input" type="number" min="0" step="1"/>
        </div>
    )
}

function PlayerBadge({player}: {player: Player}) {
    return (
        <div className="player-badge-submit">
            <img src={player.avatar} alt="player avatar"/>
            <div className="name-tag-submit">
                <label>{player.name ? player.name : "unnamed"}</label>
            </div>
        </div>
    );
}

export default function SubmitScores(){
    const tourneyStore = useTourneyStore.getState();
    const navigate = useNavigate();
    const roundOverPath = "/WilliesDistribution";
    const tourneyOverPath = "/FinalResults";

    function validateScores() : boolean {
        // setMinPlayersError(false);
        // setMissingNameError(false);
        // setUniqueNamesError(false);
        //
        // if (players.length < 4) {
        //     setMinPlayersError(true);
        //     return false;
        // }
        //
        // for (let player of players) {
        //     if (!player.name) {
        //         setMissingNameError(true);
        //         return false;
        //     }
        // }
        //
        // if (new Set(players.map((p: Player) => p.name)).size !== players.length) {
        //     setUniqueNamesError(true)
        //     return false;
        // }

        return true;
    }

    function submitScores(path: string) {
        if (!validateScores()) {
            return;
        }

        navigate(path);
    }

    function DisplayContinueButton(isLastRound: boolean) {
        if (!isLastRound) {
            return (
                <button className="big-button" onClick={() => submitScores(roundOverPath)}>Round Over</button>
            );
        } else {
            return (
                <button className="big-button" onClick={() => submitScores(tourneyOverPath)}>Tourney Over</button>
            );
        }
    }

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Submit Scores</h1>
            </div>
            <div className="main-content submit-scores">
                {tourneyStore.matchParticipants.map((p, i) => <PlayerEntry key={i} player={p}/>)}
                <div className="over-buttons">
                    {/*{DisplayContinueButton(tourneyStore.isLastRound())}*/}
                    {DisplayContinueButton(false)}
                    {DisplayContinueButton(true)}
                </div>
            </div>
            <div className="footer lower-left">
                <Link to="/RoundDisplay">
                    <button className="small-button">Nevermind</button>
                </Link>
            </div>
        </div>
    );
}