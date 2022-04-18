import { useState, ChangeEvent } from "react";
import styles from "./UserAddingForm.module.css";

function UserAddingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("");
  const [modal, setModal] = useState(true);

  const standard = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const verifyInputs =
    !firstName || !lastName || !email || !gender || !agreement;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
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
      case "gender":
        setGender(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    // setGender("");
    setEmail("");
    setLasttName("");
    setFirstName("");
  };

  const toggleCheckbox = () => {
    setAgreement((prev) => (prev = !prev));
  };

  const onClose = () => {
    setModal(!modal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // addingUser({
    //   firstName,
    //   lastName,
    //   email,
    //   agreement,
    //   gender,
    // }).then((res) => setUser(res));

    // checkUser(email, password).then((res) => {
    //   window.localStorage.setItem("userID", JSON.stringify(res[0].id));
    // });

    toggleCheckbox();
    onClose();
    reset();
  };
  return (
    <div>
      <form className={styles.formular} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <input
          onChange={handleChange}
          name="firstName"
          placeholder="First name"
          type="text"
          pattern={standard}
          value={firstName}
          id="firstName"
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last name"
          type="text"
          pattern={standard}
          value={lastName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          value={email}
        />

        <select
          className={styles.selector}
          onChange={handleChange}
          name="gender"
          value={gender}
        >
          <option value="">Gender</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>
          <option value="Ma abtin">Ma abtin</option>
        </select>
        <label htmlFor="agreement" className={styles.label}>
          <input
            // className={styles.confirmation}
            name="agreement"
            type="checkbox"
            checked={agreement}
            onChange={toggleCheckbox}
          />
          <span className={styles.agreement}>
            I agree with the processing of personal data
          </span>
        </label>
        <button disabled={verifyInputs} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserAddingForm;