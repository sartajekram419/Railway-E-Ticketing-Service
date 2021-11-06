import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../AddTrainCoachContainer/AddTrainCoachContainerElements'
import Axios from 'axios'

class AddTrainCoachContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            classID: 0,
            noOfSeats: "",
            isVisible: true,

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            style: {
                width: "70%"
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

        this.savePressed = this.savePressed.bind(this);

        this.setClassID = this.setClassID.bind(this);
        this.setNoOfSeats = this.setNoOfSeats.bind(this);
    }

    savePressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addNewTrainCoach", {
            trainName: this.props.trainName,
            coachID: this.props.coach,
            classID: this.state.classID,
            noOfSeats: this.state.noOfSeats,
        })
        .then((res) => {
            this.setState({isVisible: false});
        })

        

    };

    setClassID(data) {
        this.setState({
            classID: data,
        })
    }

    setNoOfSeats(data) {
        this.setState({
            noOfSeats: data,
        })
    }

    render() {
        return (
            <div style={this.state.style}>
            {this.state.isVisible && 
                <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>Coach no {this.props.coach}</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Class ID</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setClassID(e.target.value) }} type="number" placeholder="Enter Class ID" />
                    <br ></br>

                    <label style={this.state.styleLabel}>No of Seats</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setNoOfSeats(e.target.value) }} type="number" placeholder="Enter No of Seats" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.savePressed}>Save</Button>
                    </ButtonAndNavLinkBox>
                </Form>

                </Container>
            }
            </div>
                

            
        )
    }
}

export default withRouter(AddTrainCoachContainer)

//Login form checked