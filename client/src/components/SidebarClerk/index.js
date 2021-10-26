import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarClerkElements'

class SidebarClerk extends Component {

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
            <SidebarContainer isSidebarOpen={this.props.isSidebarOpen} onClick={this.props.toggleSidebar}>
                <Icon onClick={this.props.toggleSidebar}>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/clerk-home' activeStyle>Home</SidebarLink>
                        <SidebarLink to='/home' onClick={this.logoutPressed} activeStyle>Logout</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
                
            </SidebarContainer>
        )
    }
}

export default withRouter(SidebarClerk)
