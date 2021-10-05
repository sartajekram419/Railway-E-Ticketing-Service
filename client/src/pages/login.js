import React, {Component, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginForm from '../components/LoginForm'

export default class Login extends Component {

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

    render(){
        return (
            <div style={this.state.style}>
                <Sidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <Navbar toggleSidebar={this.toggleSidebar} />
                <LoginForm setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
            </div>
        )
    }
}

