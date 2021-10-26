import React, { Component } from 'react'
import TrainInfoContainer from '../TrainInfoContainer';
import { Container, Heading } from './TrainListContainer'

export default class TrainListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
        }
    }
    
    render() {
        return (
            <Container >
                    <Heading>
                        <h2 style={this.state.styleHeading}>Available Trains</h2>
                    </Heading>


                    {this.props.trainIDFromPositionToPositionList.map((trainIDFromPositionToPosition,index)=>{
                        return <TrainInfoContainer 
                                key={index}
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
                                trainIDFromPositionToPosition={trainIDFromPositionToPosition}

                                selectedTrainIDFromPositionToPosition={this.props.selectedTrainIDFromPositionToPosition}
                                setSelectedTrainIDFromPositionToPosition={this.props.setSelectedTrainIDFromPositionToPosition}
                                         
                                setClerkID={this.props.setClerkID} 
                                clerkID={this.props.clerkID}
                                />
                    })}

                </Container>
        )
    }
}

