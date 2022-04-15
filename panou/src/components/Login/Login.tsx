import styles from "./Login.module.css";
import { checkUser } from "../../services/users";
// import { useState, ChangeEvent } from "react";
import Modal from "../Modal/Modal";
import { useContext, useState, ChangeEvent } from "react";
import context from "../../context/app-context";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [localUser, setLocalUser] = useState(null);
  const [modal, setModal] = useState(true);

  const { user, setUser } = useContext(context);
  console.log(user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const onClose = () => {
    setModal(!modal);
  };

  const logUser = (e: any) => {
    e.preventDefault();
    console.log("logUser");
    checkUser(email, password).then((res) => {
      if (res.length === 0) {
        alert("Sign up, please!");
        reset();
        /////////// Redirectionam spre pagina de Inregistrare//////////
        return;
      }
      console.log(res[0].id);
      setLocalUser(res);
      window.localStorage.setItem("userID", JSON.stringify(res[0].id));
      setUser(res[0]);
      onClose();
      ///////////// Directionam spre pagina Utilizatorului/////////////
      reset();
    });
  };
  return (
    <>
      {modal && (
        <Modal onClose={onClose}>
          <form className={styles.formular}>
            <h3>Log In</h3>
            <input
              onChange={handleChange}
              name="email"
              placeholder="Email"
              type="email"
              value={email}
            />
            <input
              onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
              value={password}
            />
            <button onClick={logUser} disabled={!email || !password}>
              Log in
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default Login;
