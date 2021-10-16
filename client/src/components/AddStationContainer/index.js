import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../AddStationContainer/AddStationContainerElements'
import Axios from 'axios'

class AddStationContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            stationName: "",
            stationDistrict: "",

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

        this.addPressed = this.addPressed.bind(this);

        this.setStationName = this.setStationName.bind(this);
        this.setStationDistrict = this.setStationDistrict.bind(this);
    }

    addPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addNewStation", {
            station_name: this.state.stationName,
            station_district: this.state.stationDistrict,
        })
            .then((res) => {
                if (res.data.isValid) {
                    alert("Station Added Successfully!");
                } else {
                    alert("Staion already exits!");
                }
            })

        this.props.setIsAddStationContainerOpen();

    };

    cancelPressed = event => {
        event.preventDefault();

        this.props.setIsAddStationContainerOpen();


    };

    setStationName(data) {
        this.setState({
            stationName: data,
        })
    }

    setStationDistrict(data) {
        this.setState({
            stationDistrict: data,
        })
    }

    render() {
        return (
            <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>Add New Station</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Station Name</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationName(e.target.value) }} type="text" placeholder="Enter Station Name" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Station District</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationDistrict(e.target.value) }} type="text" placeholder="Enter Station District" />
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

export default withRouter(AddStationContainer)

//Login form checked