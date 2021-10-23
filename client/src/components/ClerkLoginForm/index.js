import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../ClerkLoginForm/ClerkLoginFormElements'
import Axios from 'axios'

class ClerkLoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            id: 0,
            password: "",

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

        this.loginPressed = this.loginPressed.bind(this);

        this.setID = this.setID.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/loginClerk", {
            id: this.state.id,
            password: this.state.password,
        })
            .then((res) => {



                if (res.data.isValid == true) {
                    this.props.setClerkID(this.state.id);
                    this.setID(-1);
                } else {

                }
            })
    };

    setID(data) {
        this.setState({
            id: data,
        }, () => {
            if (this.state.id != "" && this.state.id == -1) {
                this.props.history.push({ pathname: '/clerk-home' });
            }
        })
    }

    setPassword(data) {
        this.setState({
            password: data,
        })
    }

    render() {
        return (
            <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>Clerk Login</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Clerk ID</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setID(e.target.value) }} type="number" placeholder="Enter Clerk ID" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Password</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setPassword(e.target.value) }} type="password" placeholder="Enter Password" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.loginPressed}>Login</Button>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(ClerkLoginForm)

