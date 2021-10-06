import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import Axios from 'axios'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isSidebarOpen: false,
    }


    // Axios.post("http://localhost:3001/api/loginPassenger", {
    //         email: '1',
    //         password: '1',
    //     })
    //     .then((res) => {
    //         if (res.data.isValid == true) {
    //             this.props.setPassengerPassword('999');
    //         } else {
                
    //         }
    //     })
    

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

