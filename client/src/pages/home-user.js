import React, {Component, useState} from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import NavbarUser from '../components/NavbarUser'
import PaymentLogos from '../components/PaymentLogos'
import SidebarUser from '../components/SidebarUser'

export default class HomeUser extends Component {

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
            <div>
                <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <NavbarUser toggleSidebar={this.toggleSidebar} />
                <Header />
                <HomeInfoDiv />
                <hr></hr>
                <PaymentLogos />
                <hr></hr>
            </div>
        )
    }
}
