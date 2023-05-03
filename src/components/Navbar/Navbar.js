// import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

//CSS
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FaBars, FaLock, FaPen } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthValue();
  // const { logout } = useAuthentication();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.navbar}>
      <FaBars className={styles.faBars} onClick={showSidebar}></FaBars>
      {sidebar && <Sidebar active={setSidebar} />}
      <>
        <NavLink to="/" className={styles.brand}>
          Mini<span>Blog</span>
        </NavLink>
      </>
      <div className={styles.link_list}>
        {!user && (
          <div>
            <li>
              <SidebarItem way="/login" Icon={FaLock} Text="Login" />
            </li>
            <li>
              <SidebarItem way="/register" Icon={FaPen} Text="Cadastre-se" />
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
