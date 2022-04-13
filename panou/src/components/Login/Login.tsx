import styles from "./Login.module.css";

function Login() {
  return (
    <form className={styles.formular}>
      <input
        // onChange={handleChange}
        name="email"
        placeholder="Email"
        type="email"
        // value={email}
        required
      />
      <input
        // onChange={handleChange}
        name="password"
        placeholder="Password"
        type="password"
        // value={password}
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
