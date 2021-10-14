import React, { Component } from 'react'

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noOfCoaches: 0,
        }

        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);

        // alert(this.props.selectedTrainID);
        // alert(this.props.fromStationPosition);
        // alert(this.props.toStationPosition);
        // alert(this.props.journeyDate);
        // alert(this.props.classID);
        // alert(this.props.noOfPassengers);
    }

    setNoOfCoaches(data) {
        this.setState({
          noOfCoaches: data,
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default TrainCoach
