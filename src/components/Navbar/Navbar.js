// import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

//CSS
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FaBars, FaLock, FaPen, FaUnlock } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import UserPhoto from "../UserPhoto/UserPhoto";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";


const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 

  return (
    <div className={styles.navbar}>
      {user && (
        <>
          <div>
            <FaBars className={styles.faBars} onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
          </div>
          <div>
            <NavLink to="/" className={styles.brand}>
              Mini<span>Blog</span>
            </NavLink>
          </div>
          <div className={styles.link_list}>
            <li>
            <UserPhoto className={styles.photo} />
            </li>
            <li>
              <SidebarItem
                x={logout}
                way="/"
                Icon={FaUnlock}
                Text="Logout"
                className={styles.siderbaritem}
              ></SidebarItem>
            </li>
          </div>
        </>
      )}

      {!user && (
        <>
          <div>
            <FaBars className={styles.faBars_inactive} />
            {sidebar && <Sidebar active={setSidebar} />}
          </div>
          <div>
            <NavLink to="/" className={styles.brand}>
              Mini<span>Blog</span>
            </NavLink>
          </div>
          <div className={styles.link_list}>
            <li>
              <SidebarItem
                way="/login"
                Icon={FaLock}
                Text="Login"
              ></SidebarItem>
            </li>
            <li>
              <SidebarItem
                way="/register"
                Icon={FaPen}
                Text="Cadastre-se"
              ></SidebarItem>
            </li>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
