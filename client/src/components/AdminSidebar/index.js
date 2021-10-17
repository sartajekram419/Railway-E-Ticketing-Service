import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './AdminSidebarElements'

class AdminSidebar extends Component {

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
            <SidebarContainer isSidebarOpen={this.props.isSidebarOpen} onClick={this.props.toggleSidebar}>
                <Icon onClick={this.props.toggleSidebar}>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/stations' activeStyle>Stations</SidebarLink>
                        <SidebarLink to='/trains' activeStyle>Trains</SidebarLink>
                        <SidebarLink to='/clerks' activeStyle>Clerks</SidebarLink>
                        <SidebarLink to='/admin-login' onClick={this.logoutPressed} activeStyle>Logout</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>

            </SidebarContainer>
        )
    }
}

export default withRouter(AdminSidebar)
