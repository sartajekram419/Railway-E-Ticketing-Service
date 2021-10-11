import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import DashboardUserContainer from '../components/DashboardUserContainer';

export default class DashboardUser extends Component {

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

  


//   componentDidMount() {
//     window.addEventListener('load', this.handleLoad);
//  }

//  componentWillUnmount() { 
//    window.removeEventListener('load', this.handleLoad)  
//  }
    


    render() {
        return (
            <div style={this.state.style}>
                <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <NavbarUser toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
            
                {/* <h1>{this.props.passengerMail}</h1>
                <h1>{this.props.passengerNid}</h1>
                <h1>{this.props.passengerName}</h1>
                <h1>{this.props.passengerMobile}</h1>
                <h1>{this.props.passengerPassword}</h1> */}

                <DashboardUserContainer 
                setPassengerMail={this.props.setPassengerMail} 
                passengerMail={this.props.passengerMail} 
                setPassengerNid={this.props.setPassengerNid}
                passengerNid={this.props.passengerNid} 
                setPassengerName={this.props.setPassengerName}
                passengerName={this.props.passengerName} 
                setPassengerMobile={this.props.setPassengerMobile}
                passengerMobile={this.props.passengerMobile} 
                setPassengerPassword={this.props.setPassengerPassword}
                passengerPassword={this.props.passengerPassword} 
                />
            
            </div>
        )
    }
}

