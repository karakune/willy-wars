import "../App.css";
import {Game} from "../Models/Game.tsx";
import {useEffect} from "react";
import {useForm, useFieldArray, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import {Link, useNavigate} from "react-router";
import ConfirmationPopup from '../ConfirmationPopup.tsx'
import {Player} from "../Models/Player.tsx";

export default function GamesAdd ({players, onGamesSubmitted}: {players: Player[], onGamesSubmitted: any}){
    const {control, register, handleSubmit, setError, clearErrors, reset, formState: {errors, isSubmitSuccessful}} = useForm();
    const {fields, append, remove} = useFieldArray({control, name: "games", rules: {
            validate: {
                validateGames: (games: any) => {
                    clearErrors("root.missingName");

                    if (games == null || games.length === 0) {
                        return "Must have at least one game";
                    }

                    if (new Set(games.map((p: Game) => p.name)).size !== games.length) {
                        return "All game names must be unique";
                    }

                    return true;
                },
            },
        }});

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<any> = async (results) => {
        if (await ConfirmationPopup(`You've got ${players.length} players and ${results.games.length} games. Ready to start?`,
            "Hold up", "Let's GOOOOO")) {
            onGamesSubmitted(results.games);
            navigate("/RoundDisplay");
        }
    };
    const onError: SubmitErrorHandler<any> = (erroneousFields) => {
        console.log(erroneousFields);
        // @ts-ignore
        if (erroneousFields?.games?.some(g => g != null && g.name.type === "required")) {
            setError("root.missingName", {
                type: "missingName",
                message: "All games must have a name"
            })
        }
    }

    useEffect(() => {
        reset({keepValues: true})
    }, [isSubmitSuccessful])

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h1>Enter Games</h1>
            {errors?.games && <p style={{color: "red"}}>{errors?.games?.root?.message}</p>}
            {errors?.root?.missingName && <p style={{color: "red"}}>{errors?.root?.missingName?.message}</p>}
            {/* TODO: 1 slot visible on page load */}
            {fields.map((player, i) => (
                <div className="row" key={player.id}>
                    <input placeholder="Enter a name..." {...register(`games.${i}.name` as const, {required: true,})} />
                    <button type="button" onClick={() => remove(i)}>✖</button>
                </div>

            ))}
            <div className="row">
                <button type="button" onClick={() => append(new Game())}>One more</button>
            </div>
            <div className="row">
                <Link to="/PlayersAdd">
                    <button type="button">Back</button>
                </Link>
                <button type="submit">Let's get started</button>
            </div>
        </form>
    );
}