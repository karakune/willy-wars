import {confirmable, ConfirmDialog, createConfirmation} from "react-confirm";

export interface Props {
    infoMessage: string;
    cancelMessage: string;
    okMessage: string;
}

const ConfirmationPopup: ConfirmDialog<Props, boolean> = ({show, proceed, infoMessage, cancelMessage, okMessage}) => (
    <dialog className="confirmationPopup" onCancel={() => proceed(false)} open={show}>
        {infoMessage}
        <button onClick={() => proceed(false)}>{cancelMessage}</button>
        <button onClick={() => proceed(true)}>{okMessage}</button>
    </dialog>
);

export default function confirm(
    infoMessage: string,
    cancelMessage: string,
    okMessage: string,
    options = {}
) {
    return createConfirmation(confirmable(ConfirmationPopup))({
        infoMessage,
        cancelMessage,
        okMessage,
        ...options
    });
}