import styles from "./Login.module.css";
import { checkUser } from "../../services/users";
import { useContext, useState, ChangeEvent } from "react";
import context from "../../context/app-context";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const userContext = useContext(context);
  console.log(userContext);

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
  const logUser = (e: any) => {
    e.preventDefault();

    checkUser(email, password).then((res) => {
      if (res.length === 0) {
        alert("Sign up, please!");
        reset();
        /////////// Redirectionam spre pagina de Inregistrare//////////
        return;
      }
      console.log(res[0].id);
      setUser(res);
      window.localStorage.setItem("userID", JSON.stringify(res[0].id));
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
