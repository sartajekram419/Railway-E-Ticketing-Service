import React, { Component } from 'react'
import { Container, Button, Heading, Form, MessageBox } from './TicketVerificationElements'
import { withRouter } from 'react-router-dom';
import Axios from 'axios'


class TicketVerification extends Component {

    constructor(props) {
        super(props);

        this.state = {

            ticketID: 0,
            mobileNo: 0,

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

        this.setTicketID = this.setTicketID.bind(this);
        this.setMobileNo = this.setMobileNo.bind(this);
    }

    setTicketID(data) {
        this.setState({
            ticketID: data,
        })
    }

    setMobileNo(data) {
        this.setState({
            mobileNo: data,
        })
    }


    verifyPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/verifyTicket", {
            ticketID: this.state.ticketID,
            mobileNo: this.state.mobileNo,
        })
        .then((res) => {
            if (res.data.isValid == true) {
                this.props.setMessage("The Ticket is Valid");
            } else {
                this.props.setMessage("The Ticket is Invalid");
            }
        })
    };


    render() {
        return (
            <div>
                <MessageBox message={this.props.message}>
                    {this.props.message}
                </MessageBox>

                <Container  message={this.props.message}>    
                <Heading>
                    <h2 style={this.state.styleHeading}>Verify Your Ticket</h2>
                </Heading>


                <Form>
                    <label style={this.state.styleLabel}>Ticket ID</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setTicketID(e.target.value) }} type="number" placeholder="Enter Ticket ID" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Mobile No</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setMobileNo(e.target.value) }} type="number" placeholder="Enter Mobile No." />
                    <br></br>

                    <Button onClick={this.verifyPressed}>Verify</Button>

                </Form>
                </Container >

            </div>
            
        )
    }
}

export default withRouter(TicketVerification)