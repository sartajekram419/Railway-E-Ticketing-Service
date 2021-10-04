import React from 'react'
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarUserElements'
import { useHistory } from 'react-router-dom'

const NavbarUser = ({ toggleSidebar }) => {

    let history = useHistory();

    const logoutPressed = () => {
        window.location = "/home";
        history.push('/home');
    }

    return (
        <>
            <Nav>
                <Title>
                    <h3>Railway E-Ticketing Service</h3>
                </Title>
                <Bars onClick={toggleSidebar} />
                <NavMenu>
                    <NavLink to='/home-user' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/verify-ticket-user' activeStyle>
                        Verify Ticket
                    </NavLink>
                    <NavLink to='/contact-us-user' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/home' onClick={logoutPressed} activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavbarUser
