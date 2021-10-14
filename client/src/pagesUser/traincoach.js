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
            
            noOfSeats: 0,
            seatList: [],

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
        this.changeCoachSeat = this.changeCoachSeat.bind(this);
    }

    setNoOfCoaches(data) {
        this.setState({
          noOfCoaches: data,
        })
    }

    changeCoachSeat (data) {
        this.props.setSelectedCoachID(parseInt(data));

        Axios.post("http://localhost:3001/api/getSeatCount", {
            trainID: this.props.selectedTrainID,
            coachID: data,
        })
        .then((res) => {
            this.setState({
                noOfSeats: res.data[0].No_of_seats,
            })
            this.setState({seatList:[]})
            for (let i = 1; i <= res.data[0].No_of_seats; i++) {
                this.setState({ seatList: [...this.state.seatList, [i.toString()]] })
            }
        })
    }

    render() {
        return (
            <div>
                <label >Select a Coach</label>
                <Select onChange={(e) => { this.changeCoachSeat(e.target.value) }} >
                <option value="" disabled selected>Select a coach</option>
                    {this.state.coachList.map((coach, index) => {
                        return <option key={index} value={coach}>
                            {coach}
                        </option>
                    })}
                </Select>

                {this.props.selectedCoachID}
                
                <TrainCoachSeat
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

                setSelectedCoachID={this.props.setSelectedCoachID}
                selectedCoachID={this.props.selectedCoachID}
                setSelectedSeats={this.props.setSelectedSeats}
                selectedSeats={this.props.selectedSeats}

                seatList={this.state.seatList}
                />
                
            </div>
        )
    }
}

export default TrainCoach
