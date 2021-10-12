import React, {Component} from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import Navbar from '../components/Navbar'
import PaymentLogos from '../components/PaymentLogos'
import Sidebar from '../components/Sidebar'

export default class Home extends Component {

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
                <Header 
                setPassengerMail={this.props.setPassengerMail} 
                passengerMail={this.props.passengerMail}
                setFromStation={this.props.setFromStation}
                fromStation={this.props.fromStation}
                setToStation={this.props.setToStation}
                toStation={this.props.toStation}
                setJourneyDate={this.props.setJourneyDate}
                journeyDate={this.props.journeyDate}
                setClass={this.props.setClass}
                class={this.props.class}
                setNoOfPassengers={this.props.setNoOfPassengers}
                noOfPassengers={this.props.noOfPassengers}
                setSelectedTrainID={this.props.setSelectedTrainID}
                selectedTrainID={this.props.setSelectedTrainID}
                />
                <HomeInfoDiv />
                <hr></hr>
                <PaymentLogos />
                <hr></hr>
            </div>
        )
    }
}

