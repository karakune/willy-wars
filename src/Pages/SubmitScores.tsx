import "./SubmitScores.css"
import {Link, useNavigate} from "react-router";
import {Player} from "../Models/Player.tsx";
import {useTourneyStore} from "../Stores/TourneyStore.tsx";
import {useState} from "react";


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
    const matchOverPath = "/WilliesDistribution";
    const tourneyOverPath = "/FinalResults";
    const [scores, setScores] = useState(tourneyStore.matchParticipants.map(() => 0));
    const [rangeError, setRangeError] = useState(false);

    function PlayerEntry({player, index}: {player: Player, index: number}) {
        return (
            <div>
                <PlayerBadge player={player}/>
                <input className="submit-score-input" type="number" min="0" max="4" step="1" onChange={(e) => {
                    let updatedScores = scores;
                    updatedScores[index] = Number(e.target.value);
                    setScores(updatedScores);
                }}/>
            </div>
        )
    }

    function displayErrorMessages() {
        let errors = [];

        if (rangeError) {
            errors.push(<p className="error-message">All scores must be between 1 and 4</p>);
        }

        return (
            <div className="error-messages">
                {errors}
            </div>
        )
    }

    function validateScores() : boolean {
        setRangeError(false);

        for (let score of scores) {
            if (score < 1 || score > tourneyStore.matchParticipants.length) {
                setRangeError(true);
                return false;
            }
        }

        return true;
    }

    function submitScores(path: string) {
        if (!validateScores()) {
            return;
        }

        let participants = tourneyStore.matchParticipants;
        for (let i = 0; i < participants.length; i++) {
            participants[i].matchRank = scores[i];
        }

        tourneyStore.addScores(participants);

        if (path === tourneyOverPath) {
            tourneyStore.setTourneyOver();
            tourneyStore.save();
        }

        navigate(path);
    }

    function displayContinueButton(isLastRound: boolean) {
        if (!isLastRound) {
            return (
                <button className="big-button" onClick={() => submitScores(matchOverPath)}>Match Over</button>
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
                {tourneyStore.matchParticipants.map((p, i) => <PlayerEntry key={i} player={p} index={i}/>)}
                {displayErrorMessages()}
                <div className="over-buttons">
                    {displayContinueButton(tourneyStore.isLastMatch())}
                    {/*{displayContinueButton(false)}*/}
                    {/*{displayContinueButton(true)}*/}
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