import React, { Component } from 'react'
import { Container, Table } from './JourneyUserContainerElements'

export default class JourneyUserContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
    }

    render() {
        return (
            <Container>
                <Table style={this.state.styleTable}>
                    <tr>
                        <td style={this.state.styleCol1}>Ticket ID:</td>
                        <td style={this.state.styleCol2} >{this.props.item.ticketID}</td>
                    </tr>
                    
                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Train Name:</td>
                        <td style={this.state.styleCol2}>{this.props.item.trainName}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Coach ID:</td>
                        <td style={this.state.styleCol2} >{this.props.item.coachID}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>No of seats:</td>
                        <td style={this.state.styleCol2} >{this.props.item.noOfSeats}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Station From:</td>
                        <td style={this.state.styleCol2}>{this.props.item.stationFrom}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Station To:</td>
                        <td style={this.state.styleCol2}>{this.props.item.stationTo}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Departure Date and Time:</td>
                        <td style={this.state.styleCol2} >{this.props.item.departure}</td>
                    </tr>

                    <tr style={this.state.styleRow}>
                        <td style={this.state.styleCol1}>Issue Date and Time:</td>
                        <td style={this.state.styleCol2} >{this.props.item.issue}</td>
                    </tr>

                </Table>
            </Container>
        )
    }
}
