import React, { useState } from 'react'
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../RegistrationForm/RegistrationFormElements'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

const RegistrationForm = ({  }) => {

    let history = useHistory();

    const [name, setName] = useState("")
    const [nid, setNid] = useState(0)
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState(0)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signUpPressed = () => {
        Axios.post("http://localhost:3001/api/insertPassenger", {
            name: name,
            nid: nid,
            email: email,
            mobile: mobile,
            password: password,
        })
        .then((res) => {
            if (res.data.isValid == true) {
                window.location = "/home-user";
                history.push('/home-user');
            } else {
                alert("Invalid");
            }
        });
    };

    const styleHeading = {
        color: "#fff",
        textAlign: "center",
    }

    const styleInput = {
        height: "40px",
        padding: "0px 0px 0px 10px",
    }

    const styleLabel = {
        padding: "0px 0px 0px 0px",
    }

    const styleHr = {
        background: "transparent",
        color: "transparent",
        margin: "0",
        borderStyle: "none",
        height: "1vw",
    }

    return (
        <Container>
            <Heading>
                <h2 style={styleHeading}>User Registration</h2>
            </Heading>

            <Form>
                <label style={styleLabel}>Name</label>
                <hr style={styleHr}></hr>
                <input style={styleInput} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Full name"/>
                <br ></br>

                <label style={styleLabel}>NID</label>
                <hr style={styleHr}></hr>
                <input style={styleInput} onChange={(e)=>{setNid(e.target.value)}}  type="number" placeholder="Enter National ID"/>
                <br></br>

                <label style={styleLabel}>Email</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} onChange={(e)=>{setEmail(e.target.value)}}  type="text" placeholder="Enter Email"/>
                <br></br>

                <label style={styleLabel}>Mobile</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} onChange={(e)=>{setMobile(e.target.value)}}  type="number" placeholder="Enter Mobile No"/>
                <br></br>

                <label style={styleLabel}>Password</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
                <br></br>

                <label style={styleLabel}>Confirm Password</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password"/>
                <br></br>
                <hr style={styleHr}></hr>

                <ButtonAndNavLinkBox>
                <Button onClick={signUpPressed}>Sign Up</Button>
                <NavLink to='/login' activeStyle> Already Registerd? </NavLink> 
                </ButtonAndNavLinkBox>
            </Form>

        </Container>
    )
}

export default RegistrationForm