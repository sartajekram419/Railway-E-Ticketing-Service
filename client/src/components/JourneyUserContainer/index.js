import React, { Component } from 'react'
import { Container, Table } from './JourneyUserContainerElements'
import Axios from 'axios'

export default class JourneyUserContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trainName: "",
            startName: "",
            endName: "",

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

        // Getting the trainName from trainID
        Axios.post("http://localhost:3001/api/getTrainName", {
            trainID: this.props.item.Train_ID,
        })
        .then((res) => {
            this.setState({ trainName: res.data[0].Name })
        })
        

        // Getting the startName from trainID and Start_position
        Axios.post("http://localhost:3001/api/getStationID", {
            trainID: this.props.item.Train_ID,
            position: this.props.item.Start_position,
        })
        .then((res) => {
            var stationID = res.data[0].Station_ID;
            Axios.post("http://localhost:3001/api/getStationName", {
            stationID: stationID,
            })
            .then((res) => {
                this.setState({ startName: res.data[0].Name })
            })
        })

        // Getting the endName from trainID and End_position
        Axios.post("http://localhost:3001/api/getStationID", {
            trainID: this.props.item.Train_ID,
            position: this.props.item.End_position,
        })
        .then((res) => {
            var stationID = res.data[0].Station_ID;
            Axios.post("http://localhost:3001/api/getStationName", {
            stationID: stationID,
            })
            .then((res) => {
                this.setState({ endName: res.data[0].Name })
            })
        })

    }

    render() {
        return (
            <Container>
                <Table style={this.state.styleTable}>
                    <tr>
                        <td style={this.state.styleCol1}>Ticket ID:</td>
                        <td style={this.state.styleCol2} >{this.props.item.Ticket_ID}</td>
                    </tr>
                    
                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Train Name:</td>
                        <td style={this.state.styleCol2}>{this.state.trainName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Coach ID:</td>
                        <td style={this.state.styleCol2} >{this.props.item.Coach_ID}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>No of seats:</td>
                        <td style={this.state.styleCol2} >{this.props.item.No_of_seats}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Station From:</td>
                        <td style={this.state.styleCol2}>{this.state.startName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Station To:</td>
                        <td style={this.state.styleCol2}>{this.state.endName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Departure Date and Time:</td>
                        <td style={this.state.styleCol2} >{this.props.item.Journey_time}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Issue Date and Time:</td>
                        <td style={this.state.styleCol2} >{this.props.item.Issue_time}</td>
                    </tr>

                </Table>
            </Container>
        )
    }
}
