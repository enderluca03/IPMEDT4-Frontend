import styles from "../styles/popup.module.css"
import React from 'react';

const Popup = (props) => {
    const ok = (e) =>{
        e.stopPropagation();
        props.handler()
    }

    const deleteitem = (e) =>{
        e.stopPropagation();
        props.deleteItem()
    }
    
    return (<>
                <div className={styles.popup}>
                    <header>
                        <p>{props.message}</p>
                    </header>
                    <section className={styles.buttons}>
                        <button className={props.cancel? styles.confirm: ''} onClick={ok}>{props.ok}</button>
                        <button className={` ${props.cancel? '': styles.hidden} ${styles.cancel}`} onClick={deleteitem}>{props.cancel}</button>
                    </section>
                </div>   
                <div className={` ${styles.backdrop} ${props.delete? styles.hiddenextra: ''}`}></div>     
            </>
    )
}
    
  
export default Popup;
  