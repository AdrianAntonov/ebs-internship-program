import { useContext } from "react";
import context from "../../../context/app-context";
import styles from "./UserMenu.module.css";

const UserMenu: React.FC = () => {
  const { user, setUser } = useContext(context);

  const logoutUser = () => {
    window.localStorage.removeItem("userID");
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      agreement: false,
    });
  };

  return (
    <div className={styles.name}>
      <span>{user.firstName}</span>
      <button onClick={logoutUser} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
