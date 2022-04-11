import styles from "./Registration.module.css";

function Registration() {
  return (
    <div className={styles.form}>
      <form >
        <div><input placeholder="First name" type="text" /></div>
        <div><input placeholder="Last name" type="text" /></div>
        <div><input placeholder="Email" type="email" /></div>
        <div><input placeholder="Password" type="password" /></div>
        <div><input placeholder="Confirm password" type="password" /></div>
        <div><input type="checkbox" /><span>Sunt de acord cu prelucrarea datelor personale</span></div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
