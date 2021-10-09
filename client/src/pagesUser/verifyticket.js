import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
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
            },
            message: "",
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }

    setMessage(data) {
        this.setState({
            message: data,
        })
    }

    render() {
        return (
            <div style={this.state.style}>
                <Sidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <Navbar toggleSidebar={this.toggleSidebar} />
                <TicketVerification message={this.state.message} setMessage={this.setMessage} />
            </div>
        )
    }
}

