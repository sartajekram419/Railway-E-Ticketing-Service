import React from 'react'
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../RegistrationForm/RegistrationFormElements'


const RegistrationForm = () => {

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
                <input style={styleInput} type="text" placeholder="Enter Full name"/>
                <br ></br>

                <label style={styleLabel}>NID</label>
                <hr style={styleHr}></hr>
                <input style={styleInput}  type="number" placeholder="Enter National ID"/>
                <br></br>

                <label style={styleLabel}>Email</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} type="text" placeholder="Enter Email"/>
                <br></br>

                <label style={styleLabel}>Mobile</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} type="number" placeholder="Enter Mobile No"/>
                <br></br>

                <label style={styleLabel}>Password</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} type="password" placeholder="Password"/>
                <br></br>

                <label style={styleLabel}>Confirm Password</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} type="password" placeholder="Confirm Password"/>
                <br></br>
                <hr style={styleHr}></hr>

                <ButtonAndNavLinkBox>
                <Button>Sign Up</Button>
                <NavLink to='/login' activeStyle> Already Registerd? </NavLink> 
                </ButtonAndNavLinkBox>
            </Form>

        </Container>
    )
}

export default RegistrationForm