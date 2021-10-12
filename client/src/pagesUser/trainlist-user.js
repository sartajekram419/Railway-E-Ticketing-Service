import React, {Component} from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import NavbarUser from '../components/NavbarUser'
import PaymentLogos from '../components/PaymentLogos'
import SidebarUser from '../components/SidebarUser'

export default class TrainListUser extends Component {

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
                {/* <Header 
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
                <hr></hr> */}
            </div>
        )
    }
}
