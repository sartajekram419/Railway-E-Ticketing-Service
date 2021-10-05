import React, {Component, useState} from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'

export default class VerfiyTicketUser extends Component {

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
                <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <NavbarUser toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
            </div>
        )
    }
}

