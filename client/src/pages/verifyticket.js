import React, {Component, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default class VerifyTicket extends Component {

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
                <Sidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />
                <Navbar toggleSidebar={this.toggleSidebar} />
            </div>
        )
    }
}

