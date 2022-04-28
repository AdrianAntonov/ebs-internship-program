import { useState, ChangeEvent } from "react";
import { addingUser } from "../../../../services/users";
import styles from "./UserAddingForm.module.css";

interface UserAddingProp {
  onClose: () => void;
}

const UserAddingForm = ({ onClose }: UserAddingProp) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [fields, setFields] = useState({
    firstName,
    lastName,
    email,
    gender,
    role,
  });

  const standard = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const verifyInputs =
    !fields.firstName ||
    !fields.lastName ||
    !fields.email ||
    !fields.gender ||
    !fields.role ||
    !agreement;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const reset = () => {
    setGender("");
    setEmail("");
    setLasttName("");
    setFirstName("");
    setRole("");
  };

  const toggleCheckbox = () => {
    setAgreement((prev) => (prev = !prev));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fields);
    // editId
    //   ? editUser(editId, { ...fields, agreement })
    //   : addingUser({ ...fields, agreement });

    addingUser({ ...fields, agreement });

    toggleCheckbox();
    onClose();
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
        <select name="role" onChange={handleChange} value={fields.role}>
          <option value="">Role</option>
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
        <button disabled={verifyInputs}>Submit</button>
      </form>
    </div>
  );
};

export default UserAddingForm;
