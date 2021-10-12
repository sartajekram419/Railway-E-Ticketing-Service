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
                </FindCardBox>
                
                
            </Container>
        )
    }
}

