import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Table, Button } from './TrainInfoContainerElements'
import Axios from 'axios'


class TrainInfoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trainName: "",
            fromStationName: "",
            toStationName: "",
            departureTime: "",

            styleLabel: {
                color: "#fff",
                fontWeight: 'bold',
                padding: "0px 0px 8px 0px",
            },
            styleTable: {
                //borderStyle: "ridge",
                // borderLeft: "1.5px solid #a4b0af",
                // borderBottom: "2px solid #a4b0af",
            },
            styleRow: {
                borderTop: "1px solid #a4b0af",
            },
            styleCol1: {
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 0px 10px 10px",
                width: "40%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2: {
                fontSize: "16px",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
            },
            
        }
        //alert(this.props.clerkID);

        Axios.post("http://localhost:3001/api/getTrainName", {
            trainID: this.props.trainIDFromPositionToPosition.trainID,
        })
        .then((res) => {
            this.setTrainName(res.data[0].Name);
        })



        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.trainIDFromPositionToPosition.trainID,
            position: this.props.trainIDFromPositionToPosition.fromStationPosition,
        })
        .then((res) => {
            this.setFromStationName(res.data[0].Name);
        })

        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.trainIDFromPositionToPosition.trainID,
            position: this.props.trainIDFromPositionToPosition.toStationPosition,
        })
        .then((res) => {
            this.setToStationName(res.data[0].Name);
        })



        if(this.props.trainIDFromPositionToPosition.fromStationPosition<this.props.trainIDFromPositionToPosition.toStationPosition) {
            Axios.post("http://localhost:3001/api/getUpTime", {
            trainID: this.props.trainIDFromPositionToPosition.trainID,
            position: this.props.trainIDFromPositionToPosition.fromStationPosition,
            })
            .then((res) => {
                this.setDepartureTime(res.data[0].Up_time);
            })
        } else {
            Axios.post("http://localhost:3001/api/getDownTime", {
            trainID: this.props.trainIDFromPositionToPosition.trainID,
            position: this.props.trainIDFromPositionToPosition.fromStationPosition,
            })
            .then((res) => {
                this.setDepartureTime(res.data[0].Down_time);
            })
        }
         
        
        //this.seeDetailsPressed = this.seeDetailsPressed.bind(this);

        this.setTrainName = this.setTrainName.bind(this);
        this.setFromStationName = this.setFromStationName.bind(this);
        this.setToStationName = this.setToStationName.bind(this);
        this.setDepartureTime = this.setDepartureTime.bind(this);
    }

    setTrainName(data) {
        this.setState({
            trainName: data,
        })
    }

    setFromStationName(data) {
        this.setState({
            fromStationName: data,
        })
    }

    setToStationName(data) {
        this.setState({
            toStationName: data,
        })
    }

    setDepartureTime(data) {
        this.setState({
            departureTime: data,
        })
    }



    seeDetailsPressed = event => {
        event.preventDefault();

        this.props.setSelectedTrainID(this.props.trainIDFromPositionToPosition.trainID);
        this.props.setFromStationPosition(this.props.trainIDFromPositionToPosition.fromStationPosition);

        this.props.setToStationPosition(this.props.trainIDFromPositionToPosition.toStationPosition);
        
        
        //this.props.setPassengerMail("fsdfasf")
        
        this.props.setSelectedTrainIDFromPositionToPosition(this.props.trainIDFromPositionToPosition)
        


        // alert(this.props.trainIDFromPositionToPosition.trainID);
        // alert(this.props.trainIDFromPositionToPosition.fromStationPosition);
        // alert(this.props.trainIDFromPositionToPosition.toStationPosition);


        // alert(this.props.selectedTrainID);
        // alert(this.props.fromStationPosition);
        // alert(this.props.toStationPosition);
        // alert(this.props.passengerMail)

        if(this.props.clerkID != 0)
        this.props.history.push({ pathname: '/traincoach-clerk' });
        else 
        this.props.history.push({ pathname: '/traincoach' });
    };



    render() {
        return (
            <Container>
                <Table style={this.state.styleTable}>
                    <tr>
                        <td style={this.state.styleCol1}>Train Name:</td>
                        <td style={this.state.styleCol2} >{this.state.trainName}</td>
                    </tr>
                    
                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>From Station:</td>
                        <td style={this.state.styleCol2}>{this.state.fromStationName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>To Station:</td>
                        <td style={this.state.styleCol2} >{this.state.toStationName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Departure time:</td>
                        <td style={this.state.styleCol2} >{this.state.departureTime}</td>
                    </tr>

                </Table>

                <Button onClick={this.seeDetailsPressed}>See Details</Button>
            </Container>   
        )
    }
}

export default withRouter(TrainInfoContainer)