import React, { useState } from 'react';
import styles from "../styles/forms.module.css"
import Navbar from "../components/layout/navbar";
import { useNavigate } from "react-router-dom";

const AddAdvice = () => {
const navigate = useNavigate();
  const [amountOfAdvices, setamountOfAdvices] = useState(0)
  const [amountOfParagraphs, setamountOfParagraphs] = useState(0)
  const [medicine, setmedicine] = useState(null)
  const [contraindication, setcontraindication] = useState(null)
  const [description, setdescription] = useState({})
  const [advices, setadvices] = useState({})

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    if (name.startsWith("medicine")){setmedicine(target.value)}
    else if (name.startsWith("contraindication")){setcontraindication(target.value)}
    else if (name.startsWith("paragraph")){setdescription({...description, [name]: target.value})}
    else if (name.startsWith("advice")){setadvices({...advices, [name]: target.value})}
  }
  
  const increaseCount = (type) => {
    if (type == "amountOfAdvices"){
        setamountOfAdvices(amountOfAdvices+1)
    }
    else if (type == "amountOfParagraphs"){
        setamountOfParagraphs(amountOfParagraphs+1)
    }
  }

  const redirect = () => {
    navigate("/alladvices", {state: { popup: true, type: "toegevoegd" }} );
  }

  const submitForm = (e) => {
    e.preventDefault();
    let requestbody = {"medicine": medicine, "contraindication": contraindication, "description": Object.values(description), "advices": Object.values(advices)}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(requestbody)
  };
  fetch('https://mijndnamedicatiepas.mennoveerkamp.com/api/advice/create', requestOptions)
  .then(function(response){
    if(response.ok){
        redirect();
    }
  })
}

  return (
            <>
              <Navbar />
              <main className={styles.form}>
                <form className={styles.inputs} onSubmit={submitForm}>
                  <legend>Nieuw advies</legend>
                  <fieldset>
                    <label htmlFor="medicine">Medicijn</label>
                    <input type="text" name="medicine" id="medicine" placeholder="Atorvastine" required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/pill_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="contraindication">Contraindicatie</label>
                    <input type="text" name="contraindication" id="contraindication" placeholder="SLCO1B1 521CC" required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/hand_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="paragraph">Beschrijving</label>
                    <textarea type="text" name="paragraph" id="paragraph" placeholder="Het risico op..." required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/description_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></textarea>
                    {[...Array(amountOfParagraphs)].map((e, i) => {
                      return (
                        <textarea type="text" name={"paragraph" + i} key={i} placeholder="Het risico op..." onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/description_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></textarea>
                      );
                    })}
                    <div className={styles.add_input}>
                      <img onClick={() => increaseCount("amountOfParagraphs")} src="assets/icons/plus_icon.svg" alt="plus" />
                      <a onClick={() => increaseCount("amountOfParagraphs")}>Nog een paragraaf</a>
                    </div>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="advice">Adviezen</label>
                    <input type="text" name="advice" id="advice" placeholder="kies een alternatief..." required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/advice_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                    {[...Array(amountOfAdvices)].map((e, i) => {
                      return (
                        <input type="text" name={"advice" + i} key={i} placeholder="kies een alternatief..." onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/advice_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                      );
                    })}
                    <div className={styles.add_input}>
                      <img onClick={() => increaseCount("amountOfAdvices")} src="assets/icons/plus_icon.svg" alt="plus" />
                      <a onClick={() => increaseCount("amountOfAdvices")}>Nog een advies</a>
                    </div>
                  </fieldset>
                  <fieldset className={styles.submit}>
                    <input type="submit" value="Voeg toe" />
                  </fieldset>
                </form>
              </main>
            </>
  )
}
export default AddAdvice;
  