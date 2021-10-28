import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, Select, ButtonAndNavLinkBox } from './AddTrainContainerElements'
import Axios from 'axios'

class AddTrainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            trainName: "",
            noOfCoaches: 0,
            noOfClasses: 0,

            stationList: [],

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

        this.setTrainName = this.setTrainName.bind(this);
        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
        this.setNoOfClasses = this.setNoOfClasses.bind(this);
    }

    setTrainName(data) {
        this.setState({
            trainName: data,
        })
    }

    setNoOfCoaches(data) {
        this.setState({
            noOfCoaches: data,
        })
    }

    setNoOfClasses(data) {
        this.setState({
            noOfClasses: data,
        })
    }


    addPressed = event => {
        event.preventDefault();

        // Axios.post("http://localhost:3001/api/addNewClerk", {
        //     clerkName: this.state.clerkName,
        //     clerkMobile: this.state.clerkMobile,
        //     clerkPassword: this.state.clerkPassword,
        //     selectedStationName: this.state.selectedStationName,
        // })
        //     .then((res) => {
        //         if (res.data.isValid) {
        //             alert("Clerk Added Successfully!");
        //         } else {
        //             alert("Clerk already exits!");
        //         }
        //     })

    };


    render() {
        return (
            <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>Add New Train</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Train Name</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setTrainName(e.target.value) }} type="text" placeholder="Enter Name" />
                    <br ></br>

                    <label style={this.state.styleLabel}>No of Coaches</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setNoOfClasses(e.target.value) }} type="number" placeholder="Enter no of coaches" />
                    <br></br>
                    <label style={this.state.styleLabel}>No of Classes</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setNoOfClasses(e.target.value) }} type="number" placeholder="Enter no of classes" />
                    
                    <br></br>
                    <hr style={this.state.styleHr}></hr>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.addPressed}>Add</Button>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(AddTrainContainer)

//Login form checked