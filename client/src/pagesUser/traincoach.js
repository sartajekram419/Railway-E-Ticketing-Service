import Axios from 'axios';
import React, { Component } from 'react'
import TrainCoachSeat from '../components/TrainCoachSeat';
import { Container, Select, InputContainerRight, InputContainerLeft, SpaceContainer, Button } from './TrainCoachElements'

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noOfCoaches: 0,
            coachList: [],
        }

        Axios.post("http://localhost:3001/api/getCoachesCount", {
            trainID: this.props.selectedTrainID,
        })
        .then((res) => {
            this.setState({
                noOfCoaches: res.data[0].No_of_coaches,
            })
            for (let i = 1; i <= res.data[0].No_of_coaches; i++) {
                this.setState({ coachList: [...this.state.coachList, [i.toString()]] })
            }
        })

        // alert(this.props.selectedTrainID);
        // alert(this.props.fromStationPosition);
        // alert(this.props.toStationPosition);
        // alert(this.props.journeyDate);
        // alert(this.props.classID);
        // alert(this.props.noOfPassengers);

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
                <label style={this.state.styleLabel}>Select a Coach</label>
                <Select onChange={(e) => { this.props.setSelectedCoachID(parseInt(e.target.value)) }} >
                    <option value="" disabled selected>Select a coach</option>
                    {this.state.coachList.map((coach, index) => {
                        return <option key={index} value={coach}>
                            {coach}
                        </option>
                    })}
                </Select>
                
                <TrainCoachSeat
                setSelectedCoachID={this.props.setSelectedCoachID}
                selectedCoachID={this.props.selectedCoachID}
                />
                
            </div>
        )
    }
}

export default TrainCoach
