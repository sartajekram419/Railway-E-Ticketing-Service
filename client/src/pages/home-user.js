import React, {useState} from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import NavbarUser from '../components/NavbarUser'
import PaymentLogos from '../components/PaymentLogos'
import SidebarUser from '../components/SidebarUser'

const HomeUser = ( { } ) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div>
            <SidebarUser isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <NavbarUser toggleSidebar={toggleSidebar} />
            <Header />
            <HomeInfoDiv />
            <hr></hr>
            <PaymentLogos />
            <hr></hr>
        </div>
    )
}

export default HomeUser
