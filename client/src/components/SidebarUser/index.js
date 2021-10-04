import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarUserElements'

const SidebarUser = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/home-user' activeStyle>Home</SidebarLink>
                    <SidebarLink to='/dashboard-user' activeStyle>Dashboard</SidebarLink>
                    <SidebarLink to='/verify-ticket-user' activeStyle>Verify Ticket</SidebarLink>
                    <SidebarLink to='/Contact-us-user' activeStyle>Contact Us</SidebarLink>
                    <SidebarLink to='/home' activeStyle>Logout</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default SidebarUser
