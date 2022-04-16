import { useContext, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import context from "../../context/app-context";
import { getUserByID } from "../../services/users";
import styles from "./HomePage.module.css";

function PaginaPrincipala() {
  const { user, setUser } = useContext(context);

  useEffect(() => {
    const storageResult = window.localStorage.getItem("userID");

    storageResult &&
      getUserByID(Number(storageResult))
        .then((result) => {
          setUser(result);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [setUser]);

  return (
    <div className={styles.welcome}>
      <h2>WELCOME !</h2>
    </div>
  );
}

export default PaginaPrincipala;
