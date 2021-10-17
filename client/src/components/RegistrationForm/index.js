import React, { Component } from 'react'
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../RegistrationForm/RegistrationFormElements'
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

        this.signUpPressed = this.signUpPressed.bind(this);

        this.setName = this.setName.bind(this);
        this.setNid = this.setNid.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setConfirmPassword = this.setConfirmPassword.bind(this);
    }

    signUpPressed = event => {
        event.preventDefault();

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
                this.props.setPassengerNid(this.state.nid);
                this.props.setPassengerName(this.state.name);
                this.props.setPassengerMobile(this.state.mobile);
                this.props.setPassengerPassword(this.state.password);
                this.setEmail("-1");
            } else {
                //this.setEmail("");
            }
        })

        // if(this.state.email != "") {
        //     this.props.history.push({pathname: '/home-user'});
        // }
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
        )
    }
}

export default withRouter(RegistrationForm)