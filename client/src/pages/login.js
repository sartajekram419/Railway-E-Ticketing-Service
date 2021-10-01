import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginForm from '../components/LoginForm'

const Login = () => {

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
            <LoginForm />
        </div>
    )
}

export default Login
