import React from 'react'
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from '../LoginForm/LoginFormElements'

const LoginForm = () => {

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
                <h2 style={styleHeading}>User Login</h2>
            </Heading>

            <Form>
                <label style={styleLabel}>Email</label>
                <hr style={styleHr}></hr>
                <input style={styleInput} type="text" placeholder="Enter Email"/>
                <br ></br>

                <label style={styleLabel}>Password</label>
                <hr style={styleHr}></hr>
                <input  style={styleInput} type="password" placeholder="Password"/>
                <br></br>

                <ButtonAndNavLinkBox>
                <Button>Login</Button>
                <NavLink to='/' activeStyle> Forgot Password? </NavLink> 
                </ButtonAndNavLinkBox>
            </Form>

        </Container>
    )
}

export default LoginForm
