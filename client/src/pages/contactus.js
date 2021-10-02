import React, { useState } from 'react'
import ContactTable from '../components/ContactTable'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const ContactUs = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
            <ContactTable />
        </div>
    )
}

export default ContactUs
