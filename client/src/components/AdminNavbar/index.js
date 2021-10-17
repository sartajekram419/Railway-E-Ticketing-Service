import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './AdminNavbarElements'

class AdminNavbar extends Component {


    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed = event => {
        event.preventDefault();
        
        this.props.setAdminID(0);
        this.props.history.push("/admin-login");
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
                        <NavLink to='/stations' activeStyle>
                            Stations
                        </NavLink>
                        <NavLink to='/trains' activeStyle>
                            Trains
                        </NavLink>
                        <NavLink to='/clerks' activeStyle>
                            Clerks
                        </NavLink>
                        <NavLink to='/admin-login' onClick={this.logoutPressed} activeStyle>
                            Logout
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default withRouter(AdminNavbar)