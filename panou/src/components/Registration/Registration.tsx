import { useState } from "react";
import { addingUser } from "../../services/users";
import styles from "./Registration.module.css";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // const [data, setData] = useState(null);

  const handleChange = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLasttName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
    }
  };

  const standard = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

  const reset = () => {
    setConfirmPassword("");
    setPassword("");
    setEmail("");
    setLasttName("");
    setFirstName("");
  };

  const toggleCheckbox = () => {
    setChecked((prev) => (prev = !prev));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not confirmed");
      return;
    }

    addingUser({ firstName, lastName, email, password, checked });
    toggleCheckbox();
    reset();
  };

  return (
    <div>
      <form className={styles.formular} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="firstName"
          placeholder="First name"
          type="text"
          pattern={standard}
          value={firstName}
          id="firstName"
          required
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last name"
          type="text"
          pattern={standard}
          value={lastName}
          required
        />
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
        <input
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          required
        />
        <select
          className={styles.selector}
          onChange={handleChange}
          name="gender"
          required
        >
          <option value="">Gender</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>
          <option value="Ma abtin">Ma abtin</option>
        </select>
        <label htmlFor="checkbox" className={styles.label}>
          <input
            className={styles.confirmation}
            name="checkbox"
            type="checkbox"
            checked={checked}
            onChange={toggleCheckbox}
            required
          />
          <span className={styles.agreement}>
            I agree with the processing of personal data
          </span>
        </label>
        <button type="submit">Submit</button>
        {/* <button onClick={checkUser}>Submit</button> */}
      </form>
    </div>
  );
}

export default Registration;
