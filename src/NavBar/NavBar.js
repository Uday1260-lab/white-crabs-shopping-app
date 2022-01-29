import React from 'react';
import { useLocation, } from 'react-router';
import { LinkStyled, NavList } from './NavBar.styled.js';
const LINKS = [
    {to:'/',text:'Home',icon: <i class="fas fa-home"></i>},
    {to:'/category',text:'Category',icon: <i class="fas fa-list-alt"></i>},
    {to:'/cart',text:'Cart', icon: <i class="fas fa-shopping-cart"></i>},
]

const NavBar = () => {

    const location = useLocation();

    return (
        <NavList>
            {LINKS.map( item => <li key={item.to}><LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : '' }> {item.icon} {item.text} </LinkStyled></li> )}                
        </NavList>
    );
  };

export default NavBar;
