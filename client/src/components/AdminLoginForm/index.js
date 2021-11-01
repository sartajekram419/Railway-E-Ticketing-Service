import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, MessageBox, ButtonAndNavLinkBox } from '../AdminLoginForm/AdminLoginFormElements'
import Axios from 'axios'

class AdminLoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            id: 0,
            password: "",

            idError: "",
            passwordError: "",

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

        this.validate = this.validate.bind(this);
    }

    validate = () => {
        var isValid = true;
        
        if(this.state.id == 0) {
            this.setState({idError: "ID Required."});
            isValid = false;
        } else {
            this.setState({idError: ""});
        }

        if(this.state.password == "") {
            this.setState({passwordError: "Password Required."})
            isValid = false;
        } else {
            this.setState({passwordError: ""})
        }

        return isValid;
    }

    loginPressed = event => {
        event.preventDefault();

        let isValid = this.validate();
        if(isValid) {
            Axios.post("http://localhost:3001/api/loginAdmin", {
                id: this.state.id,
                password: this.state.password,
            })
            .then((res) => {



                if (res.data.isValid == true) {
                    this.props.setAdminID(this.state.id);
                    this.setID(-1);
                } else {
                    this.setState({passwordError: "Incorrect Credentials."})
                }
            })
        }

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
            <div>

            <MessageBox idError={this.state.idError} passwordError={this.state.passwordError}>
                    {this.state.idError}
                    {this.state.idError!="" && <br></br>}
                    {this.state.passwordError}
            </MessageBox>
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

            </div>
        )
    }
}

export default withRouter(AdminLoginForm)

