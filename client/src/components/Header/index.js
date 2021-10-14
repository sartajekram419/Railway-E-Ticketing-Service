import React, { Component } from 'react'
import { Container, TextBox, FindCardBox } from './HeaderElements'
import FindCard from '../FindCard'

export default class Header extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Container>

                <TextBox>
                    <h1>Welcome to <br/>Railway <br/>E-Ticketing Service</h1>
                </TextBox>

                <FindCardBox>
                    <FindCard
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
                </FindCardBox>
                
                
            </Container>
        )
    }
}

