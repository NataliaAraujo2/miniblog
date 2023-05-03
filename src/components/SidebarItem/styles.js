import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: palevioletred;
  font-size: 2em;
  color: white;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 5px 0; 


  > svg {
    margin: 0 5px 0 0;
  }
  &:hover {
    background-color: black;
  }
`;


