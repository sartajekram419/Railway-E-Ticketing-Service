import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../AdminLoginForm/AdminLoginFormElements'
import Axios from 'axios'

class AdminLoginForm extends Component {

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

        alert(this.props.adminID);



        Axios.post("http://localhost:3001/api/loginAdmin", {
            id: this.state.id,
            password: this.state.password,
        })
            .then((res) => {



                if (res.data.isValid == true) {
                    this.props.setAdminID(this.state.id);
                    this.setID(-1);
                } else {

                }
            })

        // if(this.state.email != "") {
        //     this.props.history.push({pathname: '/home-user'});
        // }
    };

    setID(data) {
        this.setState({
            id: data,
        }, () => {
            if (this.state.id != "" && this.state.id == -1) {
                this.props.history.push({ pathname: '/stations' });
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
                    <h2 style={this.state.styleHeading}>Admin Login</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>ID</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setID(e.target.value) }} type="number" placeholder="Enter ID" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Password</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setPassword(e.target.value) }} type="password" placeholder="Password" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.loginPressed}>Login</Button>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(AdminLoginForm)

