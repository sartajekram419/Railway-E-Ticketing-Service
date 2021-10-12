import React, {Component} from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import Navbar from '../components/Navbar'
import PaymentLogos from '../components/PaymentLogos'
import Sidebar from '../components/Sidebar'
import Axios from 'axios'

export default class TrainList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            trainIDFromPositionToPositionList: [],
        }


        Axios.post("http://localhost:3001/api/getTrainIDFromPositionToPositionList", {
            fromStationID: this.props.fromStationID,
            toStationID: this.props.toStationID,
        })
        .then((res) => {
            for (var i in res.data) {
                var object = {
                    trainID: res.data[i].trainID,
                    fromStationPosition: res.data[i].fromStationPosition,
                    toStationPosition: res.data[i].toStationPosition,
                };

                this.setState({ trainIDFromPositionToPositionList: [...this.state.trainIDFromPositionToPositionList, ...[object]] })
            }
        })


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

