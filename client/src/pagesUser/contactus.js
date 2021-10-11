import React, { Component } from 'react'
import ContactTable from '../components/ContactTable'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
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
                <Sidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <Navbar toggleSidebar={this.toggleSidebar} />
                <ContactTable />
            </div>
        )
    }
}

