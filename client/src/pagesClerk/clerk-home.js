import React, {Component} from 'react'
import FindCardClerk from '../components/FindCardClerk'
import NavbarClerk from '../components/NavbarClerk'
import SidebarClerk from '../components/SidebarClerk'

export default class HomeClerk extends Component {

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
    
    render() {
        return (
            <div style={this.state.style}>
                <SidebarClerk isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                <NavbarClerk toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                
                <FindCardClerk
                    setPassengerMail={this.props.setPassengerMail} 
                    passengerMail={this.props.passengerMail}
                    
                    setPassengerNid={this.props.setPassengerNid}
                    passengerNid={this.props.passengerNid}
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

                    setClerkID={this.props.setClerkID} 
                    clerkID={this.props.clerkID}
                />

            </div>
        )
    }
}

