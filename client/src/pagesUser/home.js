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
                    setFromStationID={this.props.setFromStationID}
                    fromStationID={this.props.fromStationID}
                    setToStationID={this.props.setToStationID}
                    toStationID={this.props.toStationID}
                    setFromStationPosition={this.props.setFromStationPosition}
                    fromStationPosition={this.props.fromStationPosition}
                    setToStationPosition={this.props.setToStationPosition}
                    toStationPosition={this.props.toStationPosition}
                    setJourneyDate={this.props.setJourneyDate}
                    journeyDate={this.props.journeyDate}
                    setClassID={this.props.setClassID}
                    classID={this.props.classID}
                    setNoOfPassengers={this.props.setNoOfPassengers}
                    noOfPassengers={this.props.noOfPassengers}
                    setSelectedTrainID={this.props.setSelectedTrainID}
                    selectedTrainID={this.props.selectedTrainID}
                />
                <HomeInfoDiv />
                <hr></hr>
                <PaymentLogos />
                <hr></hr>
            </div>
        )
    }
}

