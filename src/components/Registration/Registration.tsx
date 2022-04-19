import { ChangeEvent, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { addingUser, checkUser } from "../../services/users";
import context from "../../context/app-context";
import Modal from "../Modal/Modal";
import styles from "./Registration.module.css";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("");
  const [modal, setModal] = useState(true);

  const { setUser } = useContext(context);
  // console.log(userContext);

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
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "gender":
        setGender(value);
        break;
      default:
        return;
    }
  };

  const standard = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const verifyInputs =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender ||
    !agreement;

  const reset = () => {
    setConfirmPassword("");
    setPassword("");
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
    if (password !== confirmPassword) {
      alert("Password not confirmed");
      return;
    }
    addingUser({
      firstName,
      lastName,
      email,
      password,
      agreement,
      gender,
    }).then((res) => setUser(res));

    checkUser(email, password).then((res) => {
      window.localStorage.setItem("userID", JSON.stringify(res[0].id));
    });

    toggleCheckbox();
    onClose();
    reset();
  };

  return (
    <>
      {modal ? (
        <Modal onClose={onClose}>
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
              <input
                onChange={handleChange}
                name="password"
                placeholder="Password"
                type="password"
                value={password}
              />
              <input
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm password"
                type="password"
                value={confirmPassword}
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
        </Modal>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Registration;
