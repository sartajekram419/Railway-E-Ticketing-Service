import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'

export default class Dashboard extends Component {

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
            
                <h1>{this.props.passengerMail}</h1>
                <h1>{this.props.passengerNid}</h1>
                <h1>{this.props.passengerName}</h1>
                <h1>{this.props.passengerMobile}</h1>
                <h1>{this.props.passengerPassword}</h1>
            
            </div>
        )
    }
}

