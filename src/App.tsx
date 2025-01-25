import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Player } from "./Player.tsx"

function NameTaken(isTaken: boolean) {
    if (isTaken) {
        return <p style={{color: "red"}}>Name is already taken</p>
    }

    return null;
}

function App() {
    const [isNameTaken, setNameTaken] = useState(false);
    const [name, setName] = useState("");
    const [players, setPlayers] = useState<Array<Player>>([]);
    // const [currentScreen, setCurrentScreen] = useState(Screens.LandingPage);

    // async function greet() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <main className="container">
            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();

                    let isNameTaken = players.some(p => p.name === name);
                    setNameTaken(isNameTaken);
                    if (isNameTaken) {
                        return;
                    }

                    setPlayers([...players, new Player(name)]);
                }}
            >
                <input
                    id="greet-input"
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Enter a name..."
                />
                <button type="submit">Add Player</button>
            </form>

            {NameTaken(isNameTaken)}

            <ul>
                {players.map(player => (
                    <li key={player.name}>
                        <label>{player.name}</label>
                        <button onClick={() => {
                            setPlayers(players.filter(p => p.name !== player.name));
                        }}>Remove Player</button>
                    </li>
                ))}
            </ul>

            {/*<p>{greetMsg}</p>*/}
        </main>
    );
}

export default App;
