import "./PlayersAdd.css"
import {Player} from "../Models/Player.tsx";
import {useEffect} from "react";
import {useForm, useFieldArray, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import {Link, useNavigate} from "react-router";

export default function PlayersAdd ({players, onPlayersSubmitted}: {players: Player[], onPlayersSubmitted: any}){
    const {control, register, handleSubmit, setError, clearErrors, reset, formState: {errors, isSubmitSuccessful}} = useForm();
    const {fields, append, remove} = useFieldArray({control, name: "players", rules: {
        validate: {
            validatePlayers: (players: any) => {
                clearErrors("root.missingName");

                if (players.length < 2) {
                    return "Must have at least two players";
                }

                if (new Set(players.map((p: Player) => p.name)).size !== players.length) {
                    return "All player names must be unique";
                }

                return true;
            },
        },
    }});

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<any> = (results) => {
        onPlayersSubmitted(results.players);
        navigate("/GamesAdd");
    };
    const onError: SubmitErrorHandler<any> = (erroneousFields) => {
        console.log(erroneousFields);
        // @ts-ignore
        if (erroneousFields.players?.some(p => p != null && p.name.type === "required")) {
            setError("root.missingName", {
                type: "missingName",
                message: "All players must have a name"
            })
        }
    }

    useEffect(() => {
        reset({keepValues: true})
    }, [isSubmitSuccessful])

    return (
        <div className="app-layout">
            <div className="header">
                <h1>Enter Players</h1>
            </div>
            <div className="main-content">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    {errors?.players && <p style={{color: "red"}}>{errors?.players?.root?.message}</p>}
                    {errors?.root?.missingName && <p style={{color: "red"}}>{errors?.root?.missingName?.message}</p>}
                    {/* TODO: "empty" list with 4 slots when coming from new, current list when coming from GamesAdd */}
                    {fields.map((player, i) => (
                        <div className="row" key={player.id}>
                            <input placeholder="Enter a name..." {...register(`players.${i}.name` as const, {required: true,})} />
                            <button type="button" onClick={() => remove(i)}>✖</button>
                        </div>

                    ))}
                    <div className="row">
                        <button type="button" onClick={() => append(new Player())}>One more</button>
                    </div>
                </form>
            </div>
            <div className="footer add-options">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
                <button type="submit">Ok we're done</button>
            </div>
        </div>
    );
}