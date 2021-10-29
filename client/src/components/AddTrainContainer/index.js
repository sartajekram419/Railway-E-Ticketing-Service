import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, Select, ButtonAndNavLinkBox } from './AddTrainContainerElements'
import Axios from 'axios'
import AddTrainCoachContainer from '../AddTrainCoachContainer';

class AddTrainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            trainName: "",
            noOfCoaches: 0,
            noOfClasses: 2,
            isAddTrainCoachContainerVisible: false,
            coachList: [],

            stationList: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
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

        Axios.post("http://localhost:3001/api/addNewTrain", {
            trainName: this.state.trainName,
            noOfCoaches: this.state.noOfCoaches,
            noOfClasses: this.state.noOfClasses,
        })
            .then((res) => {
                if (res.data.isValid) {
                    alert("Train Added Successfully!");
                    this.setState({isAddTrainCoachContainerVisible: true})

                    for(let i=1; i<=this.state.noOfCoaches; i++) {
                        this.setState({ coachList: [...this.state.coachList, [i]] });
                    }
                }
                else {
                    alert("Train already exits!");
                }
            })

    };


    render() {
        return (
            <div style={this.state.style}>
                {!this.state.isAddTrainCoachContainerVisible && 
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
                        <input style={this.state.styleInput} onChange={(e) => { this.setNoOfCoaches(e.target.value) }} type="number" placeholder="Enter no of coaches" />
                        <br></br>

                        <hr style={this.state.styleHr}></hr>

                        <ButtonAndNavLinkBox>
                            <Button onClick={this.addPressed}>Add</Button>
                        </ButtonAndNavLinkBox>
                    </Form>

                    </Container>
                }
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                {this.state.isAddTrainCoachContainerVisible && <br></br>}
                

                {this.state.isAddTrainCoachContainerVisible && this.state.coachList.map((coach, index) => {
                    return <AddTrainCoachContainer
                            key={index} coach={coach} 
                            trainName={this.state.trainName}
                            />
                })}

                

            </div>
        )
    }
}

export default withRouter(AddTrainContainer)

//Login form checked