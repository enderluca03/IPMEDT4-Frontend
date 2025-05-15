import React from "react";
import { Link } from "react-router-dom";

import "../../styles/main.css";

import styles from "../../styles/navbar.module.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen,
    });
    if (this.state.navIsOpen) {
      document.getElementById("verticalNav").style.display = "none";
    } else {
      document.getElementById("verticalNav").style.display = "block";
    }
  };

  render() {
    return (
            <>
              <header className={styles.header}>
                <section className={styles.navcontainer}>
                  <Link to="/">
                    <p className={styles.logo}>
                      <span className={styles.orange}>Mijn</span>
                      <span className={styles.blue}>DNAMedicatiepas</span>
                    </p>
                  </Link>
                  <nav className={styles.bigNav}>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/addadvice">Advies toevoegen</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className={styles.loginContainer}>
                    <Link to="/login">
                      <button className={styles.loginButton}>Login</button>
                    </Link>
                  </div>
                  <img
                    src={
                      "../../../assets/icons/" +
                      (this.state.navIsOpen ? "close_icon.svg" : "menu_icon.svg")
                    }
                    className={styles.hamburger}
                    onClick={this.toggleNav}
                  />
                </section>
                <div className={styles.verticalNav} id="verticalNav">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/addadvice">Advies toevoegen</Link>
                      </li>
                    </ul>
                  </nav>
                  <Link to="/login">
                    <button className={styles.loginButton}>Login</button>
                  </Link>
                </div>
              </header>
            </>
          );
  }
}

export default Navbar;
