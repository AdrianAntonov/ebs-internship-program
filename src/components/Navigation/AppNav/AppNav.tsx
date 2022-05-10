import { useContext } from "react";
import { NavLink } from "react-router-dom";
import context from "../../../context/app-context";
import styles from "./AppNav.module.css";
import { Icon } from "ebs-design";

const AppNav: React.FC = () => {
  const { user } = useContext(context);

  return (
    // <div className={styles.navigation}>

    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.AppActive : styles.AppLink
        }
        to="/"
      >
        <div className={styles.iconText}>
          <Icon model="bold" type="home" />
          <span className={styles.links}>Home</span>
        </div>
      </NavLink>

      {user.agreement && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/dashboard"
          >
            <div className={styles.iconText}>
              <Icon model="bold" type="chart" />
              <span className={styles.links}>Dashboard</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/users"
          >
            <div className={styles.iconText}>
              <Icon model="bold" type="users" />
              <span className={styles.links}>Users</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.AppActive : styles.AppLink
            }
            to="/posts"
          >
            <div className={styles.iconText}>
              <Icon model="bold" type="edit" />
              <span className={styles.links}>Posts</span>
            </div>
          </NavLink>
        </>
      )}
    </>
    // </div>
  );
};

export default AppNav;
