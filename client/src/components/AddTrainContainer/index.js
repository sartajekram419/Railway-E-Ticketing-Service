import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, Select, ButtonAndNavLinkBox, Button1 } from './AddTrainContainerElements'
import Axios from 'axios'
import AddTrainCoachContainer from '../AddTrainCoachContainer';
import AddTrainStationContainer from '../AddTrainStationContainer';

class AddTrainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            trainName: "",
            noOfCoaches: 0,
            noOfClasses: 2,
            isAddTrainCoachContainerVisible: false,
            isAddTrainStationContainerVisible: false,
            coachList: [],
            stationCount: 0,

            stationList: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
                justifyContent: "center",
                alignItems: "center",
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

        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for (var i in res.data) {
                var object = res.data[i].Name;

                this.setState({ stationList: [...this.state.stationList, ...[object]] })
            }
        })

        this.addPressed = this.addPressed.bind(this);
        this.addNewStationToPathPressed = this.addNewStationToPathPressed.bind(this);

        this.setTrainName = this.setTrainName.bind(this);
        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
        this.setNoOfClasses = this.setNoOfClasses.bind(this);
        this.decrementStationCount = this.decrementStationCount.bind(this);
        this.setIsAddTrainStationContainerVisibleToFalse = this.setIsAddTrainStationContainerVisibleToFalse.bind(this);
    }

    setIsAddTrainStationContainerVisibleToFalse() {
        this.setState({
            isAddTrainStationContainerVisible: false
        })
    }

    decrementStationCount() {
        this.setState({stationCount: this.state.stationCount-1});
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

    addNewStationToPathPressed = event => {
        event.preventDefault();
        this.setState({stationCount: this.state.stationCount+1});

        this.setState({isAddTrainStationContainerVisible: true});
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

                {<br></br>}
                {<br></br>}
                
                <Button1 onClick={this.addNewStationToPathPressed}>Add Next Station to Path</Button1>

                {this.state.isAddTrainStationContainerVisible && <br></br>}
                {this.state.isAddTrainStationContainerVisible && <br></br>}
                {this.state.isAddTrainStationContainerVisible && <br></br>}

                
                {this.state.isAddTrainStationContainerVisible &&
                <AddTrainStationContainer
                    trainName={this.state.trainName}
                    stationList={this.state.stationList}

                    stationCount={this.state.stationCount}
                    decrementStationCount={this.decrementStationCount}

                    setIsAddTrainStationContainerVisibleToFalse={this.setIsAddTrainStationContainerVisibleToFalse}
                />
                }

            </div>
        )
    }
}

export default withRouter(AddTrainContainer)

//Login form checked