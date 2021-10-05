import React, { Component, useState } from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import TicketVerification from '../components/TicketVerification';

export default class VerifyTicket extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }

    render() {
        return (
            <div style={this.state.style}>
                <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <NavbarUser toggleSidebar={this.toggleSidebar} />
                <TicketVerification />
            </div>
        )
    }
}

