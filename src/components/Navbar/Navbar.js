import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

//CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.link_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HOME
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                REGISTER
              </NavLink>
            </li>
          </>
        )}
        {user && (
               <>
               <li>
                 <NavLink
                   to="/posts/create"
                   className={({ isActive }) => (isActive ? styles.active : "")}
                 >
                   NEW POST
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/dashboard"
                   className={({ isActive }) => (isActive ? styles.active : "")}
                 >
                   DASHBOARD
                 </NavLink>
               </li>
             </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
