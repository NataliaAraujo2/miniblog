import React from "react";
import { Container, Content } from "./styles";
import { FaDatabase, FaHome, FaLock,  FaPen,  FaPlus,  FaTimes } from "react-icons/fa";

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
        <SidebarItem x={closeSidebar} way="/" Icon={FaHome} Text="Início" />      
        <SidebarItem x={closeSidebar} way="/posts/create" Icon={FaPlus} Text="Novo Post" />       
        <SidebarItem x={closeSidebar} way="/dashboard" Icon={FaDatabase} Text="Dashboard" /> 
      </Content>
    </Container>
  );
};

export default Sidebar;
