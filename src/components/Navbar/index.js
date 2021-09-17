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
                <NavLink to='/'>
                    <h3>Railway E-Ticketing Service</h3>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Register
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Verify Ticket
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
