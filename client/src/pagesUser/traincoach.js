import React, { Component } from 'react'

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        alert(this.props.selectedTrainID);
        alert(this.props.fromStationPosition);
        alert(this.props.toStationPosition);
        alert(this.props.journeyDate);
        alert(this.props.classID);
        alert(this.props.noOfPassengers);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default TrainCoach
