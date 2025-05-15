import React, { useState, useEffect } from 'react';
import styles from "../styles/forms.module.css"
import Navbar from "../components/layout/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const EditAdvice = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [medicine, setmedicine] = useState(null)
  const [contraindication, setcontraindication] = useState(null)
  const [description, setdescription] = useState({})
  const [advices, setadvices] = useState({})

  useEffect(() => {
    setmedicine(location.state.medicine);
    setcontraindication(location.state.contraindication);
    setdescription(location.state.description);
    setadvices(location.state.advices);
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    
    if (name.startsWith("medicine")){
      setmedicine(target.value)
    }
    else if (name.startsWith("contraindication")){
      setcontraindication(target.value)
    }
  }

  const redirect = () => {
    navigate("/alladvices", {state: { popup: true, type: "bewerkt" }} );
  }

  const submitForm = (e) => {
    e.preventDefault();
    let requestbody = {"medicine": medicine, "contraindication": contraindication, "description": Object.values(description), "advices": Object.values(advices), "_method": "PUT"}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(requestbody)     
  };
  fetch('https://mijndnamedicatiepas.mennoveerkamp.com/api/advice/edit/' + location.state.id, requestOptions)
    .then(function(){
      redirect();
    })
  }

  return ( <>
              <Navbar />
              <main className={styles.form}>
                <form className={styles.inputs} onSubmit={submitForm}>
                  <legend>Bewerk advies</legend>
                  <fieldset>
                    <label htmlFor="medicine">Medicijn</label>
                    <input type="text" name="medicine" id="medicine" placeholder="Atorvastine" defaultValue={location.state.medicine} required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/pill_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="contraindication">Contraindicatie</label>
                    <input type="text" name="contraindication" id="contraindication" placeholder="SLCO1B1 521CC" defaultValue={location.state.contraindication} required="required" onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/hand_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="paragraph">Beschrijving</label>
                    {(location.state.description).map((e, i) => {
                      return (
                        <textarea type="text" name={"paragraph" + i} defaultValue={e} key={i} placeholder="Het risico op..." onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/description_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></textarea>
                      );
                    })}
                  </fieldset>
                  <fieldset>
                    <label htmlFor="advice">Adviezen</label>
                    {(location.state.advices).map((e, i) => {
                      return (
                        <input type="text" name={"advice" + i} defaultValue={e} key={i} placeholder="kies een alternatief..." onChange={handleInputChange} style={{background: "#ffffff url(/assets/icons/advice_icon.svg) no-repeat 5px", backgroundSize: "25px"}}></input>
                      );
                    })}
                  </fieldset>
                  <fieldset className={styles.submit}>
                    <input type="submit" value="bewerk advies" />
                  </fieldset>
                </form>
              </main>
            </>
        );
}
  
export default EditAdvice;
  