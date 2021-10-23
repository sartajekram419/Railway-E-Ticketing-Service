import React, { Component } from 'react'
import AdminLoginForm from '../components/AdminLoginForm'

export default class AdminLogin extends Component {

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

                <AdminLoginForm
                    setAdminID={this.props.setAdminID}
                    adminID={this.props.adminID}
                />
            </div>
        )
    }
}

