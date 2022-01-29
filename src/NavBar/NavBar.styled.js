import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavList = styled.ul`
  display: flex;
  background-color: #FFC900 ;
  justify-content: center;
  list-style: none;
  margin-bottom: 30px;
  padding: 10px;
`;

export const LinkStyled = styled(Link)`
  margin: 0 10px;
  padding: 20px;
  position: relative;
  text-decoration: none;
  font-size:25px;
  color: #370665;
  &.active {
    color: #FF1700;
    font-size:35px;
    background-color: #C7B198;
    padding: 20px;
    border-radius: 10px;
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 4px;
      left: 0%;
      bottom: 0;
      background-color: #219F94;
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;