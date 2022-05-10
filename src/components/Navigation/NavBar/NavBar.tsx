import { useContext } from "react";
import styles from "./NavBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import context from "../../../context/app-context";

const NavBar: React.FC = () => {
  const { user } = useContext(context);

  return (
    <div className={styles.navigation}>
      {user.agreement ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default NavBar;
