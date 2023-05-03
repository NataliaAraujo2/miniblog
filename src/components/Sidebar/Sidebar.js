import React from "react";
import { Container, Content } from "./styles";
import { FaHome, FaLock,  FaPen,  FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = ({ active }) => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const closeSidebar = () => {
    active(false);
  };
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem way="/" Icon={FaHome} Text="Início" />      
      
        {user && (
          <>
            <li>
              <NavLink to="/posts/create">NEW POST</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">DASHBOARD</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>LOGOUT</button>
          </li>
        )}
      </Content>
    </Container>
  );
};

export default Sidebar;
