import "../App.css";
import {Player} from "../Player.tsx";
import {useEffect} from "react";
import {useForm, useFieldArray, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import {Link, useNavigate} from "react-router";

export default function PlayersAdd (){
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
                } else {
                    return true;
                }
            },
        },
        }});

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<any> = (_) => navigate("/GamesAdd");
    const onError: SubmitErrorHandler<any> = (erroneousFields) => {
        console.log(erroneousFields);
        if (erroneousFields.players?.some(p => p.name.type === "required")) {
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
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h1>Enter Players</h1>
            {errors?.players && <p style={{color: "red"}}>{errors?.players?.root?.message}</p>}
            {errors?.root?.missingName && <p style={{color: "red"}}>{errors?.root?.missingName?.message}</p>}
            {fields.map((player, i) => (
                <div className="row" key={player.id}>
                    <input placeholder="Enter a name..." {...register(`players.${i}.name` as const, {required: true,})} />
                    <button type="button" onClick={() => remove(i)}>✖</button>
                </div>

            ))}
            <div className="row">
                <button type="button" onClick={() => append(new Player())}>One more</button>
            </div>
            <div className="row">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
                <button type="submit">Ok we're done</button>
            </div>
        </form>
    );
}