import React, { Component } from 'react'
import { Container, Button, Heading, Form, NavLink, MessageBox, ButtonAndNavLinkBox } from '../RegistrationForm/RegistrationFormElements'
import Axios from 'axios'
import { withRouter } from 'react-router-dom';


class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            nid: 0,
            email: "",
            mobile: 0,
            password: "",
            confirmPassword: "",

            nameError: "",
            nidError: "",
            emailError: "",
            mobileError: "",
            passwordError: "",
            confirmPasswordError: "",

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "80px 0px 80px 0px",
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

        this.signUpPressed = this.signUpPressed.bind(this);

        this.setName = this.setName.bind(this);
        this.setNid = this.setNid.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setConfirmPassword = this.setConfirmPassword.bind(this);

        this.validate = this.validate.bind(this);
    }

    validate = () => {
        var isValid = true;

        if(this.state.name == "") {
            this.setState({nameError: "Name Required."})
            isValid = false;
        } else {
            this.setState({nameError: ""})
        }

        if(this.state.nid == 0) {
            this.setState({nidError: "NID Required."})
            isValid = false;
        } else {
            this.setState({nidError: ""})
        }
        
        if(!this.state.email.includes("@") || !this.state.email.includes(".com")) {
            this.setState({emailError: "Invalid Email."});
            isValid = false;
        } else {
            this.setState({emailError: ""});
        }

        if(this.state.mobile == 0) {
            this.setState({mobileError: "Mobile No Required."})
            isValid = false;
        } else {
            this.setState({mobileError: ""})
        }

        if(this.state.password == "") {
            this.setState({passwordError: "Password Required."})
            isValid = false;
        } else {
            this.setState({passwordError: ""})
        }

        if(this.state.confirmPassword != this.state.password) {
            this.setState({confirmPasswordError: "Confirm Password did not match."})
            isValid = false;
        } else {
            this.setState({confirmPasswordError: ""})
        }

        return isValid;
    }

    signUpPressed = event => {
        event.preventDefault();

        let isValid = this.validate();
        if(isValid) {
            Axios.post("http://localhost:3001/api/registerPassenger", {
                name: this.state.name,
                nid: this.state.nid,
                email: this.state.email,
                mobile: this.state.mobile,
                password: this.state.password,
            })
            .then((res) => {
                if (res.data.isValid == true) {
                    this.props.setPassengerMail(this.state.email);
                    this.props.setPassengerNid(res.data.nid);
                    this.props.setPassengerName(this.state.name);
                    this.props.setPassengerMobile(this.state.mobile);
                    this.props.setPassengerPassword(this.state.password);
                    this.setEmail("-1");
                } else {
                    this.setState({passwordError: "Invalid Credentials."})
                }
            })
        }

    };

    setName(data) {
        this.setState({
            name: data,
        })
    }
    setNid(data) {
        this.setState({
            nid: data,
        })
    }
    setEmail(data) {
        this.setState({
            email: data,
        },()=>{
            if(this.state.email != "" && this.state.email =="-1") {
                this.props.history.push({pathname: '/home-user'});
            }
        })
    }
    setMobile(data) {
        this.setState({
            mobile: data,
        })
    }
    setPassword(data) {
        this.setState({
            password: data,
        })
    }
    setConfirmPassword(data) {
        this.setState({
            confirmPassword: data,
        })
    }

    render() {
        return (
            <div style={this.state.style}>

                <MessageBox 
                nameError={this.state.nameError} 
                nidError={this.state.nidError} 
                emailError={this.state.emailError} 
                mobileError={this.state.mobileError} 
                passwordError={this.state.passwordError}
                confirmPasswordError={this.state.confirmPasswordError} 
                >
                        {this.state.nameError}
                        {this.state.nameError!="" && <br></br>}
                        {this.state.nidError}
                        {this.state.nidError!="" && <br></br>}
                        {this.state.emailError}
                        {this.state.emailError!="" && <br></br>}
                        {this.state.mobileError}
                        {this.state.mobileError!="" && <br></br>}
                        {this.state.passwordError}
                        {this.state.passwordError!="" && <br></br>}
                        {this.state.confirmPasswordError}
                </MessageBox>
                <Container>
                    <Heading>
                        <h2 style={this.state.styleHeading}>User Registration</h2>
                    </Heading>
        
                    <Form>
                        <label style={this.state.styleLabel}>Name</label>
                        <hr style={this.state.styleHr}></hr>
                        <input style={this.state.styleInput} onChange={(e)=>{this.setName(e.target.value)}} type="text" placeholder="Enter Full name"/>
                        <br ></br>
        
                        <label style={this.state.styleLabel}>NID</label>
                        <hr style={this.state.styleHr}></hr>
                        <input style={this.state.styleInput} onChange={(e)=>{this.setNid(e.target.value)}}  type="number" placeholder="Enter National ID"/>
                        <br></br>
        
                        <label style={this.state.styleLabel}>Email</label>
                        <hr style={this.state.styleHr}></hr>
                        <input  style={this.state.styleInput} onChange={(e)=>{this.setEmail(e.target.value)}}  type="text" placeholder="Enter Email"/>
                        <br></br>
        
                        <label style={this.state.styleLabel}>Mobile</label>
                        <hr style={this.state.styleHr}></hr>
                        <input  style={this.state.styleInput} onChange={(e)=>{this.setMobile(e.target.value)}}  type="number" placeholder="Enter Mobile No"/>
                        <br></br>
        
                        <label style={this.state.styleLabel}>Password</label>
                        <hr style={this.state.styleHr}></hr>
                        <input  style={this.state.styleInput} onChange={(e)=>{this.setPassword(e.target.value)}} type="password" placeholder="Password"/>
                        <br></br>
        
                        <label style={this.state.styleLabel}>Confirm Password</label>
                        <hr style={this.state.styleHr}></hr>
                        <input  style={this.state.styleInput} onChange={(e)=>{this.setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password"/>
                        <br></br>
                        <hr style={this.state.styleHr}></hr>
        
                        <ButtonAndNavLinkBox>
                        <Button onClick={this.signUpPressed}>Sign Up</Button>
                        <NavLink to='/login' activeStyle> Already Registerd? </NavLink> 
                        </ButtonAndNavLinkBox>
                    </Form>
        
                </Container>

            </div>
        )
    }
}

export default withRouter(RegistrationForm)