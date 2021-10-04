import React, { Component } from 'react'
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../LoginForm/LoginFormElements'

export default class LoginForm extends Component {

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
            },
        }
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
                    <input style={this.state.styleInput} type="text" placeholder="Enter Email" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Password</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} type="password" placeholder="Password" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button>Login</Button>
                        <NavLink to='/login' activeStyle> Forgot Password? </NavLink>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}


