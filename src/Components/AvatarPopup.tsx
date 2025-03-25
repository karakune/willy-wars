import Modal from "react-modal";
import React from "react";
import {Player} from "../Models/Player.tsx";
import "./AvatarPopup.css"

export default function AvatarPopup(
    {
        isOpen,
        setOpen,
        onConfirm,
        onCancel,
        cancelMessage = "cancel"
    }:{
        isOpen: boolean,
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
        onConfirm: (avatar: string) => void,
        onCancel: () => void,
        cancelMessage?: string
    }
) {
    Modal.setAppElement("#root");

    function handleCancel() {
        setOpen(false);
        onCancel();
    }

    function handleConfirm(avatar: string) {
        setOpen(false);
        onConfirm(avatar);
    }

    return (
        <Modal style={{overlay: {zIndex: 5000}, content: {height: "fit-content"}}} isOpen={isOpen} onRequestClose={handleCancel}
               shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true}>
            <div className="column">
                <h2>Choose an avatar</h2>
                <div className="avatar-grid">
                    {Player.getAllAvatars().map((avatar, i) =>
                        <button key={i} onClick={() => handleConfirm(avatar)}>
                            <img className="avatar" src={avatar}/>
                        </button>
                    )}
                </div>
                <br/>
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <button onClick={handleCancel}>{cancelMessage}</button>
                </div>
            </div>
        </Modal>
    )
}