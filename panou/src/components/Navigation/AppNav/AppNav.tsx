import { useContext } from "react";
import { NavLink } from "react-router-dom";
import context from "../../../context/app-context";
import styles from "./AppNav.module.css";

function AppNav() {
  const { user, setUser } = useContext(context);

  return (
    <div className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.AppActive : styles.AppLink
        }
        to="/"
      >
        Home
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/posts"
          >
            Posts
          </NavLink>
        </>
      )}
    </div>
  );
}

export default AppNav;
