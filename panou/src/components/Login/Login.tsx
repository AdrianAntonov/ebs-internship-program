import styles from "./Login.module.css";
import { checkUser } from "../../services/users";
import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);

  const handleChange = (e: any) => {
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
  // console.log(email);
  // console.log(password);
  const reset = () => {
    setEmail("");
    setPassword("");
  };
  const logUser = (e: any) => {
    e.preventDefault();

    checkUser(email, password).then((res) => {
      if (res.length === 0) {
        alert("Sign up, please!");
        reset();
        /////////// Redirectionam spre pagina de Inregistrare//////////
        return;
      }
      setUser(res);
      ///////////// Directionam spre pagina Utilizatorului/////////////
      reset();
    });
  };
  return (
    <form className={styles.formular} onSubmit={logUser}>
      <input
        onChange={handleChange}
        name="email"
        placeholder="Email"
        type="email"
        value={email}
        required
      />
      <input
        onChange={handleChange}
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        required
      />
      <button>Log in</button>
    </form>
  );
}

export default Login;
