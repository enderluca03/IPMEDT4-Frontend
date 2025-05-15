import React, { useState, useEffect } from 'react';
import styles from "../styles/alladvices.module.css"
import Navbar from "../components/layout/navbar";
import Card from "../components/Card";
import Popup from "../components/Popup";
import { useLocation } from "react-router-dom";

const AllAdvices = () => {
  const location = useLocation();
  const [advices, setadvices] = useState([])
  const [results, setResults] = useState("")

  const [popup, setpopup] = useState(false)
  
  const getAdvices = () => {
    fetch('https://mijndnamedicatiepas.mennoveerkamp.com/api/advices')
        .then(response => {
            response.json().then(data => {setadvices(data)})
        })
        
    }
    useEffect(() => {
      if(location.state){
        setpopup(true);
      }
      getAdvices();
      
    }, []);
    
    const removepopup = () => {
      setpopup(false)
    }    

  const filteredItems = advices.filter(advice =>{
    return advice.medicine.toLowerCase().includes(results.toLowerCase())
  })

    return (
            <>
              <Navbar />
              {popup ? (
                <Popup message={"Succesvol " + location.state.type} ok="ok" handler={removepopup}/>
              ) : ''}
              <main className={styles.advices}>
                <div className={styles.searchBarContainer}>
                  <div className={styles.inputWrapper}>
                    <input placeholder="zoeken"
                    value={results}
                    onChange={(e)=>setResults(e.target.value)}
                    type="search"
                    />
                  </div>
                </div>  
                <section className={styles.adviceContainer}>
                    {filteredItems.map(advice =>(
                        <Card key={advice.id} id={advice.id} medicine={advice.medicine} contraindication={advice.contraindication} description={advice.description} advices={advice.advices}></Card>
                    ))}
                </section>
              </main>
            </>
    )
}
  
export default AllAdvices;
  