import React from 'react'
import Navbar from '../components/Navbar'
import RegistrationForm from '../components/RegistrationForm'

const Register = () => {

    const style = {
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 80px 0px",
    }

    return (
        <div style={style}>
            <Navbar />
            <RegistrationForm />
        </div>
    )
}

export default Register
