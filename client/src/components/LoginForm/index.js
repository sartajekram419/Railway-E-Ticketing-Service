import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../LoginForm/LoginFormElements'
import Axios from 'axios'

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
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

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginPressed = event => {
        event.preventDefault();

        alert(this.props.passengerMail);

        Axios.post("http://localhost:3001/api/loginPassenger", {
            email: this.state.email,
            password: this.state.password,
        })
            .then((res) => {
                if (res.data.isValid == true) {
                    this.props.setPassengerMail(this.state.email);
                    this.props.setPassengerNid(res.data.nid);
                    this.props.setPassengerName(res.data.name);
                    this.props.setPassengerMobile(res.data.mobile);
                    this.props.setPassengerPassword(res.data.password);
                    this.setEmail("-1");
                } else {

                }
            })
    };

    setEmail(data) {
        this.setState({
            email: data,
        }, () => {
            if (this.state.email != "" && this.state.email == "-1") {
                this.props.history.push({ pathname: '/home-user' });
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
                    <h2 style={this.state.styleHeading}>User Login</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Email</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setEmail(e.target.value) }} type="text" placeholder="Enter Email" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Password</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setPassword(e.target.value) }} type="password" placeholder="Password" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.loginPressed}>Login</Button>
                        <NavLink to='/login' activeStyle> Forgot Password? </NavLink>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(LoginForm)

