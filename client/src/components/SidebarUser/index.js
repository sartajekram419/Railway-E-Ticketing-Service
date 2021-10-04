import React, { Component } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarUserElements'

export default class SidebarUser extends Component {

    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed = () => {
        this.props.history.push("/home");
    }

    render() {
        return (
            <SidebarContainer isSidebarOpen={this.props.isSidebarOpen} onClick={this.props.toggleSidebar}>
                <Icon onClick={this.props.toggleSidebar}>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/home-user' activeStyle>Home</SidebarLink>
                        <SidebarLink to='/dashboard-user' activeStyle>Dashboard</SidebarLink>
                        <SidebarLink to='/verify-ticket-user' activeStyle>Verify Ticket</SidebarLink>
                        <SidebarLink to='/Contact-us-user' activeStyle>Contact Us</SidebarLink>
                        <SidebarLink to='/home' onClick={this.logoutPressed} activeStyle>Logout</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
                
            </SidebarContainer>
        )
    }
}

