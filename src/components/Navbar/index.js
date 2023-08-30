import React, { Fragment } from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({ toggle }) => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>A.</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discov">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Skills</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </Fragment>
    );
}

export default Navbar
