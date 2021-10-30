import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, Select, ButtonAndNavLinkBox } from './AddTrainStationContainerElements'
import Axios from 'axios'

class AddTrainStationContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            selectedStationName: "",
            selectedUpTime: "",
            selectedDownTime: "",

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleInput: {
                height: "40px",
                padding: "0px 0px 0px 10px",
            },
            styleLabel: {
                padding: "0px 0px 0px 0px",
            },
            styleHr: {
                background: "transparent",
                color: "transparent",
                margin: "0",
                borderStyle: "none",
                height: "1vw",
            },
        }

        alert(this.props.stationCount);

        this.addPressed = this.addPressed.bind(this);

        this.setSelectedStationName = this.setSelectedStationName.bind(this);
        this.setSelectedUpTime = this.setSelectedUpTime.bind(this);
        this.setSelectedDowmTime = this.setSelectedDownTime.bind(this);
    }

    addPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addTrainStation", {
            trainName: this.props.trainName,
            selectedStationName: this.state.selectedStationName,
            selectedUpTime: this.state.selectedUpTime,
            selectedDownTime: this.state.selectedDownTime,
            position: this.props.stationCount,
        })
        .then((res) => {
            this.props.setIsAddTrainStationContainerVisibleToFalse();
        })


    };

    cancelPressed = event => {
        event.preventDefault();
        this.props.decrementStationCount();
        this.props.setIsAddTrainStationContainerVisibleToFalse();

    };

    setSelectedStationName(data) {
        this.setState({
            selectedStationName: data,
        })
    }

    setSelectedUpTime(data) {
        this.setState({
            selectedUpTime: data,
        })
    }

    setSelectedDownTime(data) {
        this.setState({
            selectedDownTime: data,
        })
    }

    render() {
        return (
            <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>New Station To Path</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Station Name</label>
                    <hr style={this.state.styleHr}></hr>
                    <Select onChange={(e) => { this.setSelectedStationName(e.target.value) }} >
                        <option value="" disabled selected>Select a station</option>
                        {this.props.stationList.map((station, index) => {
                            return <option key={index} value={station}>
                                {station}
                            </option>
                        })}
                    </Select>
                    <br ></br>

                    <label style={this.state.styleLabel}>Station Up Time</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setSelectedUpTime(e.target.value) }} type="text" placeholder="hh:mm:ss" />
                    <br></br>

                    <label style={this.state.styleLabel}>Station Down Time</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setSelectedDownTime(e.target.value) }} type="text" placeholder="hh:mm:ss" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.addPressed}>Add</Button>
                        <Button onClick={this.cancelPressed}>Cancel</Button>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(AddTrainStationContainer)

//Login form checked