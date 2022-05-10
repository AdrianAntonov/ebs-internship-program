import { useContext } from "react";
import context from "../../../context/app-context";
import styles from "./UserMenu.module.css";
import { Button } from "ebs-design";

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
    <div className={styles.userMenu}>
      <span className={styles.name}>{user.firstName}</span>
          
      <Button buttonClass="ebs-button--medium ebs-button butt" type="dark" onClick={logoutUser}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
