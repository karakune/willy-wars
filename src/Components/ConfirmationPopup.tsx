import Modal from "react-modal";
import React from "react";

export default function ConfirmationPopup(
    {
        isOpen,
        setOpen,
        onConfirm,
        onCancel,
        title,
        description,
        cancelMessage = "cancel",
        confirmMessage = "confirm"
    }:{
        isOpen: boolean,
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
        onConfirm: () => void,
        onCancel: () => void,
        title: string,
        description: string,
        cancelMessage?: string,
        confirmMessage?: string
    }
) {
    Modal.setAppElement("#root");

    function handleCancel() {
        setOpen(false);
        onCancel();
    }

    function handleConfirm() {
        setOpen(false);
        onConfirm();
    }

    return (
        <Modal style={{overlay: {zIndex: 5000}, content: {height: "fit-content"}}} isOpen={isOpen} onRequestClose={handleCancel}
               shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true}>
            <div className="column">
                <h2>{title}</h2>
                <label>{description}</label>
                <br/>
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <button onClick={handleCancel}>{cancelMessage}</button>
                    <button onClick={handleConfirm}>{confirmMessage}</button>
                </div>
            </div>
        </Modal>
    )
}