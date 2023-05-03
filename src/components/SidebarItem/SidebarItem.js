import React from "react";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ way, Icon, Text }) => {
  return (
    
      <NavLink to={way}>
        <Container>
        <Icon />
        {Text}
        </Container>
      </NavLink>
   
  );
};

export default SidebarItem;
