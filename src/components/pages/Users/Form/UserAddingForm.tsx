import { useState, ChangeEvent } from "react";
import { addingUser, editUser } from "../../../../services/users";
import styles from "./UserAddingForm.module.css";

// import { useSetState } from "react-use";

interface UserAddingProp {
  onClose: () => void;
  editId: number;
}

const UserAddingForm = ({ onClose, editId }: UserAddingProp) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreement: "",
    gender: "",
    status: "",
  });

  const standard = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const verifyInputs =
    !firstName || !lastName || !email || !gender || !agreement;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFields((prevState) => ({ ...prevState, [name]: value }));

    // switch (name) {
    //   case "firstName":
    //     setFirstName(value);
    //     break;
    //   case "lastName":
    //     setLasttName(value);
    //     break;
    //   case "email":
    //     setEmail(value);
    //     break;
    //   case "gender":
    //     setGender(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  const reset = () => {
    setGender("");
    setEmail("");
    setLasttName("");
    setFirstName("");
    setStatus("");
  };

  const toggleCheckbox = () => {
    setAgreement((prev) => (prev = !prev));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editId
      ? editUser(editId, {
          firstName,
          lastName,
          email,
          agreement,
          gender,
          status,
        })
      : addingUser({
          firstName,
          lastName,
          email,
          agreement,
          gender,
          status,
        });

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
          value={fields.firstName}
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last name"
          type="text"
          pattern={standard}
          value={fields.lastName}
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          value={fields.email}
          autoComplete="off"
        />

        <select
          className={styles.selector}
          onChange={handleChange}
          name="gender"
          value={fields.gender}
        >
          <option value="">Gender</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>
          <option value="Ma abtin">Ma abtin</option>
        </select>
        <select name="status" onChange={handleChange} value={fields.status}>
          <option value="">Status</option>
          <option value="Administrator">Administrator</option>
          <option value="Moderator">Moderator</option>
        </select>
        <label htmlFor="agreement" className={styles.label}>
          <input
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
};

export default UserAddingForm;
