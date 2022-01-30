import React from 'react';
import { useLocation, } from 'react-router';
import { useMediaQuery } from '../Misc/custom-hooks.js';
import { LinkStyled, NavBarWrapper, NavList } from './NavBarList.styled.js';
import {Nav, Navbar} from 'rsuite';
import { Link } from 'react-router-dom';
const LINKS = [
    {to:'/',text:'Home',icon: <i class="fas fa-home"></i>},
    {to:'/category',text:'Category',icon: <i class="fas fa-list-alt"></i>},
    {to:'/cart',text:'Cart', icon: <i class="fas fa-shopping-cart"></i>},
]

const NavBarList = () => {

    const isMobile = useMediaQuery('(max-width: 992px)');

    const location = useLocation();

    return (
        <>
        { isMobile && (
                        <NavBarWrapper>
                            <Navbar className="navbar" >
                                <Nav >
                                    <Nav.Dropdown className='dropdown' title="Option">
                                        {LINKS.map( item => <li key={item.to}  ><Link to={item.to} className={item.to === location.pathname ? 'active' : 'inactive' }  > {item.icon} {item.text} </Link></li> )}
                                    </Nav.Dropdown>
                                </Nav>
                            </Navbar>
                        </NavBarWrapper>)}
        { !isMobile && (
                        <NavList>
                            {LINKS.map( item => <li key={item.to}><LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : '' }> {item.icon} {item.text} </LinkStyled></li> )}
                        </NavList>
        )}
        </>              
        );
  };

export default NavBarList;
