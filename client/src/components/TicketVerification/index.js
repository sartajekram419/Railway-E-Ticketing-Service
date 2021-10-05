import React, { Component } from 'react'
import { Container, Button, Heading, Form, NavLink } from './TicketVerificationElements'
import { withRouter } from 'react-router-dom';
import Axios from 'axios'


class TicketVerification extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
            }
        }
    }


    verifyPressed = event => {
        event.preventDefault();

        alert(this.props.passengerMail);

        Axios.post("http://localhost:3001/api/registerPassenger", {
            name: this.state.name,
            nid: this.state.nid,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
        })
            .then((res) => {
                if (res.data == 'true') {
                    this.props.setPassengerMail(this.state.email);
                    this.setEmail("-1");
                } else {
                    //this.setEmail("");
                }
            })

        // if(this.state.email != "") {
        //     this.props.history.push({pathname: '/home-user'});
        // }
    };


    render() {
        return (
            <Container>

                <Heading>
                    <h2 style={this.state.styleHeading}>Verify Your Ticket</h2>
                </Heading>


                <Form>
                    <label style={this.state.styleLabel}>PIN</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setName(e.target.value) }} type="number" placeholder="PIN" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Mobile No.</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setNid(e.target.value) }} type="number" placeholder="Enter Mobile No." />
                    <br></br>

                    <Button onClick={this.verifyPressed}>Verify</Button>

                </Form>




            </Container >
        )
    }
}

export default withRouter(TicketVerification)