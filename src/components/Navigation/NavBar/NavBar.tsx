import { useContext } from "react";
import styles from "./NavBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import AppNav from "../AppNav/AppNav";
import context from "../../../context/app-context";

const NavBar: React.FC = () => {
  const { user } = useContext(context);

  return (
    <nav className={styles.navigation}>
      <AppNav />
      {user.agreement ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default NavBar;
