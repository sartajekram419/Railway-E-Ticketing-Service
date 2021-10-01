import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import Navbar from '../components/Navbar'
import PaymentLogos from '../components/PaymentLogos'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <Header/>
            <HomeInfoDiv/>
            <hr></hr>
            <PaymentLogos/>
            <hr></hr>
        </div>
    )
}

export default Home
