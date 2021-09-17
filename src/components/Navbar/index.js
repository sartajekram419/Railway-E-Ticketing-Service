import React from 'react'
import {
    Nav,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/home'>
                    <h3>Railway E-Ticketing Service</h3>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/register' activeStyle>
                        Register
                    </NavLink>
                    <NavLink to='/verify-ticket' activeStyle>
                        Verify Ticket
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
