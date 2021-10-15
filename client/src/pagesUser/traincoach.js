import Axios from 'axios';
import React, { Component } from 'react'
import TrainCoachSeat from '../components/TrainCoachSeat';
import { Container1, Select, InfoDiv, UserInfoContainer, SpaceContainer, Button, Heading } from './TrainCoachElements'

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {


            trainName: "",
            fromStationName: "",
            toStationName: "",
            fare: "",
            departureTime: "",

            noOfCoaches: 0,
            coachList: [],
            
            noOfSeats: 0,
            seatList: [],

            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            },
            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleLabel: {
                fontSize: "20px",
                fontWeight: "bold",
                padding: "5px 0px 5px 0px",
            },
            styleText: {
                fontSize: "20px",
                padding: "5px 0px 5px 0px",
            },

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


        Axios.post("http://localhost:3001/api/getTrainName", {
            trainID: this.props.selectedTrainID,
        })
        .then((res) => {
            this.setTrainName(res.data[0].Name);
        })

        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainID,
            position: this.props.fromStationPosition,
        })
        .then((res) => {
            this.setFromStationName(res.data[0].Name);
        })

        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainID,
            position: this.props.toStationPosition,
        })
        .then((res) => {
            this.setToStationName(res.data[0].Name);
        })



        if(this.props.fromStationPosition<this.props.toStationPosition) {
            Axios.post("http://localhost:3001/api/getUpTime", {
                trainID: this.props.selectedTrainID,
                position: this.props.fromStationPosition,
            })
            .then((res) => {
                this.setDepartureTime(res.data[0].Up_time);
            })
        } else {
            Axios.post("http://localhost:3001/api/getDownTime", {
                trainID: this.props.selectedTrainID,
                position: this.props.fromStationPosition,
            })
            .then((res) => {
                this.setDepartureTime(res.data[0].Down_time);
            })
        }

        // alert(this.props.selectedTrainID);
        // alert(this.props.fromStationPosition);
        // alert(this.props.toStationPosition);
        // alert(this.props.journeyDate);
        // alert(this.props.classID);
        // alert(this.props.noOfPassengers);

        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
        this.changeCoachSeat = this.changeCoachSeat.bind(this);

        this.setTrainName = this.setTrainName.bind(this);
        this.setFromStationName = this.setFromStationName.bind(this);
        this.setToStationName = this.setToStationName.bind(this);
        this.setFare = this.setFare.bind(this)
        this.setDepartureTime = this.setDepartureTime.bind(this);
    }

    setTrainName(data) {
        this.setState({
            trainName: data,
        })
    }

    setFromStationName(data) {
        this.setState({
            fromStationName: data,
        })
    }

    setToStationName(data) {
        this.setState({
            toStationName: data,
        })
    }

    setFare(data) {
        this.setState({
            fare: data,
        })
    }

    setDepartureTime(data) {
        this.setState({
            departureTime: data,
        })
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
            <div style={this.state.style}>

                <Container1>
                
                <Heading>
                    <h2 style={this.state.styleHeading}>Train Information</h2>
                </Heading>

                <UserInfoContainer>
                        <InfoDiv>
                            <label style={this.state.styleLabel}>Train Name:</label>
                            <text style={this.state.styleText}>{this.state.trainName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>From Station:</label>
                            <text style={this.state.styleText}>{this.state.fromStationName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>To Station:</label>
                            <text style={this.state.styleText}>{this.state.toStationName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Journey Date:</label>
                            <text style={this.state.styleText}>{this.props.journeyDate}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Departure Time:</label>
                            <text style={this.state.styleText}>{this.state.departureTime}</text>
                        </InfoDiv>
                    </UserInfoContainer>


                </Container1>

                <label >Select a Coach</label>
                <Select onChange={(e) => { this.changeCoachSeat(e.target.value) }} >
                <option value="" disabled selected>Select a coach</option>
                    {this.state.coachList.map((coach, index) => {
                        return <option key={index} value={coach}>
                            {coach}
                        </option>
                    })}
                </Select>

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
