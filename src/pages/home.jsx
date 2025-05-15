import React, { useState, useEffect } from "react";
import Popup from "../components/Popup";
import Navbar from "../components/layout/navbar";
import "../styles/homepage.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import aumc from "/assets/img/aumc_foto.png";
import lumc from "/assets/img/lumc_foto.jpg";
import QR from "/assets/img/qrcode.png";
import adam from "/assets/img/logo_aumc.png";
import leide from "/assets/img/logo-lumc.png";
import mstad from "/assets/img/logo-maasstad.png";

const Home = () => {
  const location = useLocation();
  const [popup, setpopup] = useState(false);

  useEffect(() => {
    if (location.state) {
      setpopup(true);
    }
  }, []);

  const handler = () => {
    setpopup(false);
  };

  return (
    <>
      <Navbar />
      {popup ? (
        <Popup message="Succesvol ingelogd" ok="ok" handler={handler} />
      ) : (
        ""
      )}
      <main className="homePage">
        <div className="bovendeelDiv">
          <h1>MijnDNAmedicatiepas.nl</h1>
          <p>De apotheken en de afdelingen klinische/humane genetica van Amsterdam UMC en het Leids Universitair Medisch Centrum (LUMC) ontwikkelen samen met de Z-Index een nieuwe moderne DNAmedicatiepas.</p>
          <img className='homepageImg' src={aumc}></img>
          <img className='homepageImg' src={lumc}></img>

          <h2>Hoe werkt de DNAmedicatiepas?</h2>
          <p>
            Via de Quick Response (QR)-barcode op de DNAmedicatiepas kunnen de
            persoonlijke medicatieadviezen getoond worden op een telefoon of
            tablet. Op basis van deze adviezen kunnen huisartsen, specialisten
            en apothekers de juiste medicatie in de juiste persoonlijke dosering
            voorschrijven en afleveren. Voor de medicatie-adviezen wordt gebruik
            gemaakt van een landelijke database (de G-Standaard van de Z-index)
            met momenteel ongeveer 130 medicatie-adviezen.
          </p>
          <h2>Hoe ziet een advies eruit?</h2>
          <p>Scan de volgende code met je telefoon, of klik op de code:</p>

          <Link to="./alladvices">
            <img className='qrImg' src={QR} />
          </Link>
          <h2>Wie kan een DNAmedicatiepas aanvragen?</h2>
          <p>
            In eerste instantie worden de patiënten en hun ouders aangeschreven
            waarvan de uitgebreide DNA-analyse (Whole Exome Sequencing) al
            gedaan is bij de afdeling klinische genetica. Zij ontvangen van ons
            een brief met daarin uitleg over de DNAmedicatiepas en het aanbod om
            de DNAmedicatiepas aan te vragen.
          </p>
          <h2>Wie kan de medicatieadviezen inzien?</h2>
          <p>
            De patiënt bepaalt zelf wie hij toestemming geeft om de persoonlijke
            medicatieadviezen in te zien. Op de DNAmedicatiepas wordt niet
            bijgehouden welke geneesmiddelen worden gebruikt. Dit kan bij eigen
            apotheker worden opgevraagd dmv een medicatieoverzicht.
          </p>
        </div>
      </main>

      <footer className="homePageFooter">
      <h3>Waar kan ik terecht voor meer informatie?</h3>
      <div className="LogoContainer">
      
      <a href="https://www.amc.nl/">
        <img className='logoImg' src={adam}></img>
      </a>
      <a href="https://www.lumc.nl/">
        <img className='logoImg' src={leide}></img>
      </a>
      <a href="https://www.maasstadziekenhuis.nl/">
        <img className='logoImg' src={mstad}></img>
      </a>
      </div>
      </footer>
    </>
  );
};

export default Home;
