import { useState, useEffect } from "react";
import { editUser, getUserByID } from "../../../services/users";
import styles from "../Users/Users.module.css";
import { Form } from "ebs-design";

interface UserAddingProp {
  onCloseEdit: () => void;
  editId: number;
}

const UserEditForm = ({ onCloseEdit, editId }: UserAddingProp) => {
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

  useEffect(() => {
    getUserByID(editId).then((res) => setFields(res));
  }, [editId]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();

    console.log(e.target);

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
    console.log(firstName, lastName, email, gender, role);
    // editId
    //   ? editUser(editId, { ...fields, agreement })
    //   : addingUser({ ...fields, agreement });

    editUser(editId, { ...fields, agreement });

    toggleCheckbox();
    onCloseEdit();
    reset();
  };

  console.log(fields);

  return (
    <div>
      {/* <Form></Form> */}

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

export default UserEditForm;
