import Axios from 'axios';
import React, { Component } from 'react'

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noOfCoaches: 0,
        }

        Axios.post("http://localhost:3001/api/getCoachesCount", {
            trainID: this.props.selectedTrainID,
        })
        .then((res) => {
            this.setState({
                noOfCoaches: res.data[0].No_of_coaches,
            })
        })

        alert(this.props.selectedTrainID);
        alert(this.props.fromStationPosition);
        alert(this.props.toStationPosition);
        alert(this.props.journeyDate);
        alert(this.props.classID);
        alert(this.props.noOfPassengers);

        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
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
