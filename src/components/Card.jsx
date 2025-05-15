import styles from "../styles/card.module.css"
import DeleteButton from "../components/DeleteButton";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();
    const [cardisopen, setcardisopen] = useState(false)
    const [cardisremoved, setcardisremoved] = useState(false)

    const togglecardstate = () =>{
        setcardisopen(!cardisopen)
    }

    const handler = () => {
        setcardisremoved(true)
    }    

    const handleClick = () => {
        navigate("/editadvice", {state: { id: props.id,  medicine:props.medicine, contraindication:props.contraindication, description:props.description, advices:props.advices}} );
    }

    return (
            <>
                <div className={`${styles.card} ${cardisopen? styles.cardopened: styles.cardclosed} ${cardisremoved? styles.isremoved: ''}`} onClick={togglecardstate}>
                    <section className={styles.cardheader}>
                        <section>
                            <p className={styles.cardtitle}>{props.medicine}</p>
                            <p className={cardisopen? '': styles.hidden}>{props.contraindication}</p>
                        </section>
                        <section className={styles.iconButtons}>
                            <DeleteButton id={props.id} handler={handler}/>
                            <img src="/assets/icons/edit_icon.svg" alt="edit" className={styles.editbutton} onClick={handleClick} />
                            <img src="/assets/icons/expand_icon.svg" alt="expand" className={`${cardisopen? '': styles.flipped} ${styles.expandbutton}`}/>
                        </section>
                    </section>
                    <section className={`${styles.cardcontent} ${cardisopen?  '': styles.hidden}`}>
                        <b>Beschrijving:</b>
                        <ul className={styles.carddescription}>
                            {props.description.map((paragraph, index) =>(
                                <li key={index}>{paragraph}</li>
                            ))}
                        </ul>
                        <b>Adviezen:</b>
                        <ul className={styles.cardadvices}>
                            {props.advices.map((advice, index) =>(
                                <li key={index}>{advice}</li>
                            ))}
                        </ul>
                        
                    </section>
                </div>
            </>
    )
}
    
export default Card;
  