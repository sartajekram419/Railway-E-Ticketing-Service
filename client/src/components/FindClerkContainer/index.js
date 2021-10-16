import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox, Div } from './FindClerkContainerElements'
import Axios from 'axios'
import ShowClerkContainer from '../ShowClerkContainer';

class FindClerkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            clerkID: 0,
            clerkName: "",
            clerkMobile: 0,
            clerkStationID: 0,


            isShowClerkContainerOpen: false,

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

        this.findPressed = this.findPressed.bind(this);

        this.setClerkID = this.setClerkID.bind(this);
        this.setClerkName = this.setClerkName.bind(this);
        this.setClerkMobile = this.setClerkMobile.bind(this);
        this.setClerkStationID = this.setClerkStationID.bind(this);

        this.setIsShowClerkContainerOpen = this.setIsShowClerkContainerOpen.bind(this);

    }



    findPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/findClerk", {
            clerk_ID: this.state.clerkID,

        })
            .then((res) => {

                if (res.data.isValid == true) {
                    this.setClerkID(res.data.id);
                    this.setClerkName(res.data.name);
                    this.setClerkMobile(res.data.mobile);
                    this.setClerkStationID(res.data.stationID);

                    this.setState({
                        isShowClerkContainerOpen: !this.state.isShowClerkContainerOpen,
                    })
                }
                else {
                    alert("Clerk Not Found!")
                }

            })

    };

    setIsShowClerkContainerOpen() {
        this.setState({
            isShowClerkContainerOpen: !this.state.isShowClerkContainerOpen,
        })
    }



    setClerkID(data) {
        this.setState({
            clerkID: data,
        })
    }
    setClerkName(data) {
        this.setState({
            clerkName: data,
        })
    }
    setClerkMobile(data) {
        this.setState({
            clerkMobile: data,
        })
    }
    setClerkPassword(data) {
        this.setState({
            clerkPassword: data,
        })
    }
    setClerkStationID(data) {
        this.setState({
            clerkStationID: data,
        })
    }



    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <Container>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Find Clerk</h2>
                    </Heading>

                    <Form>
                        <label style={this.state.styleLabel}>Clerk ID</label>
                        <hr style={this.state.styleHr}></hr>
                        <input style={this.state.styleInput} onChange={(e) => { this.setClerkID(e.target.value) }} type="number" placeholder="Enter Clerk ID" />
                        <br ></br>



                        <ButtonAndNavLinkBox>
                            <Button onClick={this.findPressed}>Find</Button>
                        </ButtonAndNavLinkBox>




                    </Form>

                </Container>

                {this.state.isShowClerkContainerOpen && <ShowClerkContainer setIsShowClerkContainerOpen={this.setIsShowClerkContainerOpen} isShowClerkContainerOpen={this.state.isShowClerkContainerOpen} clerkID={this.state.clerkID} clerkName={this.state.clerkName} clerkMobile={this.state.clerkMobile} clerkStationID={this.state.clerkStationID} />}

            </div>
        )
    }
}

export default withRouter(FindClerkContainer)

