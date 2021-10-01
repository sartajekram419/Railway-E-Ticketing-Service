import React from 'react'
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {

    return (
        <>
            <Nav>
                <Title>
                    <h3>Railway E-Ticketing Service</h3>
                </Title>
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
