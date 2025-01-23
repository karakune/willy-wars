import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

class Player {
    constructor(
        public name: string,
        public score: number = 0
    ) {}
}

function NameTaken(isTaken: boolean) {
    if (isTaken) {
        return <p style={{color: "red"}}>Name is already taken</p>
    }

    return null;
}

function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    const [isNameTaken, setNameTaken] = useState(false);
    const [name, setName] = useState("");
    const [players, setPlayers] = useState<Array<Player>>([]);

    // async function greet() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <main className="container">
            <h1>Welcome to Tauri + React</h1>

            <div className="row">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

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
