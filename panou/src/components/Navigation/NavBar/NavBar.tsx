import { useContext } from "react";
import styles from "./NavBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import AppNav from "../AppNav/AppNav";
import context from "../../../context/app-context";

function NavBar() {
  const { user } = useContext(context);

  // console.log(user.agreement);
  // const getLocal = window.localStorage.length > 0;
  // console.log(getLocal);

  return (
    <nav className={styles.navigation}>
      <AppNav />
      {user.agreement ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}

export default NavBar;
