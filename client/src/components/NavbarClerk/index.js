import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarClerkElements'

class NavbarClerk extends Component {

    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed = event => {
        event.preventDefault();
        this.props.setClerkID(0);
        this.props.history.push("/clerk-login");
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
                        <NavLink to='/clerk-home' activeStyle>
                            Home
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

export default withRouter(NavbarClerk)

