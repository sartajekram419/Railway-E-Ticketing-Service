import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
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

export default Sidebar
