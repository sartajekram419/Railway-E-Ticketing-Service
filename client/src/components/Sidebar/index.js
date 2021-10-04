import React, { Component } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements'

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SidebarContainer isSidebarOpen={this.props.isSidebarOpen} onClick={this.props.toggleSidebar}>
                <Icon onClick={this.props.toggleSidebar}>
                    <CloseIcon />
                </Icon>
    
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/home' activeStyle>Home</SidebarLink>
                        <SidebarLink to='/login' activeStyle>Login</SidebarLink>
                        <SidebarLink to='/register' activeStyle>Register</SidebarLink>
                        <SidebarLink to='/verify-ticket' activeStyle>Verify Ticket</SidebarLink>
                        <SidebarLink to='/contact-us' activeStyle>Contact Us</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
                
            </SidebarContainer>
        )
    }
    
}

