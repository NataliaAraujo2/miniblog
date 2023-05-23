import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: palevioletred;
  width: max-content;
  height: fit-content;
  font-size: 2vw;
  color: white;
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 5px 0; 


  > svg {
    margin: 0 5px 0 0;
  }
  &:hover {
    background-color: black;
  }

  @media screen and (max-width: 768px){
    font-size: 4vw;
  }
`;


