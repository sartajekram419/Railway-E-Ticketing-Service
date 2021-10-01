import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import RegistrationForm from '../components/RegistrationForm'
import Sidebar from '../components/Sidebar'

const Register = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const style = {
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 80px 0px",
    }

    return (
        <div style={style}>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
            <RegistrationForm />
        </div>
    )
}

export default Register
