import React, { useState } from 'react';
import styles from "../styles/card.module.css"
import Popup from "../components/Popup";

const DeleteButton = (props) => {
    const [popup, setpopup] = useState(false)
    
    const deleterequest = () => {
        setpopup(false)
        const requestOptions = {
            method: 'DELETE',
        };
        fetch('https://mijndnamedicatiepas.mennoveerkamp.com/api/advice/delete/' + props.id, requestOptions)
        props.handler()
    }

    const deleteConfirm = (e) =>{
        e.stopPropagation();
        setpopup(true);
    }

    const closePopup = () =>{
        setpopup(false);
    }

    return (
            <>
                {popup ? (
                    <Popup message="weet je het zeker?" ok="Anuleer" cancel="Verwijder" handler={closePopup} deleteItem={deleterequest} delete={true}/>
                ) : ''}
                <img src="/assets/icons/delete_icon.svg" alt="delete" onClick={deleteConfirm} className={styles.deletebutton}/>
            </>
    );
}

export default DeleteButton;
