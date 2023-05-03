import React from "react";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ x, way, Icon, Text }) => {
  return (
    
      <NavLink to={way}>
        <Container onClick={x}>
        <Icon />
        {Text}
        </Container>
      </NavLink>
   
  );
};

export default SidebarItem;
