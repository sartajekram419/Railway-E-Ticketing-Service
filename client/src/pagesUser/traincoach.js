import Axios from 'axios';
import React, { Component } from 'react'
import TrainCoachSeat from '../components/TrainCoachSeat';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container1, Select, InfoDiv, UserInfoContainer, Button, Heading, Container2, Container3 } from './TrainCoachElements'
import SidebarUser from '../components/SidebarUser';
import NavbarUser from '../components/NavbarUser';

export class TrainCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {

            isSidebarOpen: false,


            trainName: "",
            fromStationName: "",
            toStationName: "",
            fare: 0,
            departureTime: "",

            noOfCoaches: 0,
            coachList: [],
            
            noOfSeats: 0,
            coachClassID: 0,
            coachClassName: "",
            seatList: [],
            seatStatusList: [],
            seatStatusList1: [],

            chosenSeatList: [],

            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            },
            styleSelectDiv: {
                display: "flex",
                flexDirection: "row",
                padding: "40px 0px 0px 0px",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
            },
            styleClassFare: {
                display: "flex",
                flexDirection: "row",
                padding: "40px 0px 0px 0px",
                width: "70%",
                alignItems: "center",
                justifyContent: "space-between",
            },
            styleSelectLabel: {
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0px 10px 0px 0px",
            },
            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleLabel: {
                fontSize: "20px",
                fontWeight: "bold",
                padding: "0px 0px 10px 0px",
            },
            styleText: {
                fontSize: "20px",
                padding: "5px 0px 5px 0px",
            },

        }

        // alert(this.props.selectedTrainIDFromPositionToPosition.trainID);
        // alert(this.props.selectedTrainIDFromPositionToPosition.fromStationPosition);
        // alert(this.props.selectedTrainIDFromPositionToPosition.toStationPosition);

        Axios.post("http://localhost:3001/api/getCoachesCount", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
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
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
        })
        .then((res) => {
            this.setTrainName(res.data[0].Name);
        })
        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
        })
        .then((res) => {
            this.setFromStationName(res.data[0].Name);
        })

        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            position: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
        })
        .then((res) => {
            this.setToStationName(res.data[0].Name);
        })



        if(this.props.fromStationPosition<this.props.toStationPosition) {
            Axios.post("http://localhost:3001/api/getUpTime", {
                trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            })
            .then((res) => {
                this.setDepartureTime(res.data[0].Up_time);
            })
        } else {
            Axios.post("http://localhost:3001/api/getDownTime", {
                trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
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

        this.toggleSidebar = this.toggleSidebar.bind(this);

        this.clearChosenSeatList = this.clearChosenSeatList.bind(this);
        this.addChosenSeatList = this.addChosenSeatList.bind(this);
        this.removeChosenSeatList = this.removeChosenSeatList.bind(this);
    }

    clearChosenSeatList() {
        this.setState({ 
            chosenSeatList: [] 
        })
    }

    addChosenSeatList(data) {
        this.setState({ 
            chosenSeatList: [...this.state.chosenSeatList, data] 
        })
    }

    removeChosenSeatList(data) {
        this.setState({chosenSeatList: this.state.chosenSeatList.filter(function(seat) { 
            return seat !== data 
        })});

        // this.setState({ 
        //     chosenSeatList: [...this.state.chosenSeatList, data] 
        // })
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

        this.clearChosenSeatList();

        Axios.post("http://localhost:3001/api/getSeatCount", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            coachID: data,
        })
        .then((res) => {
            this.setState({
                noOfSeats: res.data[0].No_of_seats,
                coachClassID: res.data[0].Class_ID,
            })
            this.setState({seatList:[]})
            this.setState({seatStatusList: []})

            for (let i = 1; i <= res.data[0].No_of_seats; i++) {

                this.setState({ seatList: [...this.state.seatList, [i]] })


                Axios.post("http://localhost:3001/api/getSeatStatus", {
                trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                coachID: this.props.selectedCoachID,
                fromPosition: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
                toPosition: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
                date: this.props.journeyDate,
                seatID: i,
                })
                .then((res1) => {
                    if(res1.data.isAvailable == true) {

                        this.setState({ seatStatusList: [...this.state.seatStatusList, i] })

                        this.setState({seatStatusList1: []})
                        for(var j=0; j<this.state.seatList.length; j++) {

                            var ind=false;
                
                            for(var k=0; k<this.state.seatStatusList.length; k++) {
                                if(this.state.seatList[j] == this.state.seatStatusList[k]) {
                                    ind = true; 
                                    break;
                                }
                            }
                
                            this.setState({ seatStatusList1: [...this.state.seatStatusList1, ind] })
                        }
                    } else {
                        //this.setState({ seatStatusList: [...this.state.seatStatusList, [i]] })
                        
                    }
                })
            }

            if(this.state.coachClassID==1) {
                this.setState({
                    coachClassName: "AC",
                })
            } else {
                this.setState({
                    coachClassName: "Non-AC",
                })
            }
        })
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }

    purchasePressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addTicket", {
            issueTime: new Date(),
            journeyTime: this.state.departureTime,
            startPositon: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            endPosition: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            classID: this.state.coachClassID,
            coachID: this.props.selectedCoachID,
            noOfSeats: this.state.chosenSeatList.length,
            fare: this.state.fare,
            passengerID: this.props.passengerNid,
        })
        .then((res) => {
            // for (var i in res.data) {
            //     var object = {
            //         trainID: res.data[i].trainID,
            //         fromStationPosition: res.data[i].fromStationPosition,
            //         toStationPosition: res.data[i].toStationPosition,
            //     };

            //     // alert(object.trainID);
            //     // alert(object.fromStationPosition);
            //     // alert(object.toStationPosition)

            //     this.setState({ trainIDFromPositionToPositionList: [...this.state.trainIDFromPositionToPositionList, ...[object]] })
            // }
        })


        for(var x=0; x<this.state.chosenSeatList.length; x++) {

            alert(this.state.chosenSeatList[x]);
        }
        
        //this.props.history.push({ pathname: '/home-user' });
    };

    render() {
        return (
            <div style={this.state.style}>
                
                {this.props.passengerMail=="" && <Sidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} />}
                {this.props.passengerMail=="" && <Navbar toggleSidebar={this.toggleSidebar} />}

                {this.props.passengerMail!="" && <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail}/>}
                {this.props.passengerMail!="" && <NavbarUser toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail}/>}

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

                <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Train Coach Information</h2>
                    </Heading>
                    
                    <div style={this.state.styleSelectDiv}>
                        <label style={this.state.styleSelectLabel}>Coach No</label>
                        <Select onChange={(e) => { this.changeCoachSeat(e.target.value) }} >
                        <option value="" disabled selected>Select a coach</option>
                            {this.state.coachList.map((coach, index) => {
                                return <option key={index} value={coach}>
                                    {coach}
                                </option>
                            })}
                        </Select>
                        <br></br>
                    </div>

                    <div style={this.state.styleClassFare}>
                        <text style={this.state.styleText}>Class: {this.state.coachClassName}</text>
                    
                        <text style={this.state.styleText}>Fare: {this.state.fare}</text>
                    </div>
                
                    <Container3>
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

                        noOfSeats={this.state.noOfSeats}

                        seatList={this.state.seatList}
                        seatStatusList1={this.state.seatStatusList1}

                        selectedTrainIDFromPositionToPosition={this.props.selectedTrainIDFromPositionToPosition}
                        setSelectedTrainIDFromPositionToPosition={this.props.setSelectedTrainIDFromPositionToPosition}
                        
                        chosenSeatList={this.state.chosenSeatList}
                        addChosenSeatList={this.addChosenSeatList}
                        removeChosenSeatList={this.removeChosenSeatList}
                        />
                    </Container3>

                    <Button 
                    setPassengerMail={this.props.setPassengerMail} 
                    passengerMail={this.props.passengerMail}
                    onClick={this.purchasePressed}
                    >
                    Purchase
                    </Button>
                
                </Container2>
                
            </div>
        )
    }
}

export default TrainCoach
