import React from "react";
import Navbar from "../components/layout/navbar";
import styles from "../styles/forms.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const submitForm = () =>{
    navigate("/", {state: { popup: true}} );
  }

  return (
          <>
            <Navbar />
            <main className={styles.form}>
              <form className={styles.inputs} onSubmit={submitForm}>
                <legend>Log in</legend>
                <fieldset>
                  <label htmlFor="username">Gebruikersnaam</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="gebruiker"
                    required="required"
                    style={{
                      background:
                        "#ffffff url(/assets/icons/user_icon.svg) no-repeat 5px",
                      backgroundSize: "25px",
                    }}
                  ></input>
                </fieldset>
                <fieldset>
                  <label htmlFor="password">Wachtwoord</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="∗∗∗∗∗∗∗"
                    required="required"
                    style={{
                      background:
                        "#ffffff url(/assets/icons/lock_icon.svg) no-repeat 5px",
                      backgroundSize: "25px",
                    }}
                  ></input>
                </fieldset>
                <fieldset className={styles.submit}>
                  <input type="submit" value="Login" />
                </fieldset>
              </form>
            </main>
          </>
  );
}

export default Login;
