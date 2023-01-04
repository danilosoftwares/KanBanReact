import styled from 'styled-components';
import { theme } from "../../styles/tokens";

export const Container = styled.button`
  all: unset;
  position: relative;
  background:  ${props => props.disabled ? theme.default.secondary : theme.default.primary };
  //background-color: rgb(115,22,55,70%);
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  
  p {
    font-weight: 500;
    line-height: 20px;
    display: flex;
    svg {
      margin-right: 10px;
    }
  }

  :hover{
    background: ${props => props.disabled ? theme.default.secondary : "rgb(115,22,55,100%)" }; 
  }
`;