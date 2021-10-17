import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarUserElements'

class NavbarUser extends Component {

    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed = event => {
        event.preventDefault();
        this.props.setPassengerMail("");
        this.props.history.push("/home");
    }

    render() {
        return (
            <>
                <Nav>
                    <Title>
                        <h3>Railway E-Ticketing Service</h3>
                    </Title>
                    <Bars onClick={this.props.toggleSidebar} />
                    <NavMenu>
                        <NavLink to='/home-user' activeStyle>
                            Home
                        </NavLink>
                        <NavLink to='/dashboard-user' activeStyle>
                            Dashboard
                        </NavLink>
                        <NavLink to='/verify-ticket-user' activeStyle>
                            Verify Ticket
                        </NavLink>
                        <NavLink to='/contact-us-user' activeStyle>
                            Contact Us
                        </NavLink>
                        <NavLink to='/home' onClick={this.logoutPressed} activeStyle>
                            Logout
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default withRouter(NavbarUser)

