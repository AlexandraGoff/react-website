import React, { Fragment } from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({ toggle }) => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                     
                </NavbarContainer>
            </Nav>
        </Fragment>
    );
}

export default Navbar
