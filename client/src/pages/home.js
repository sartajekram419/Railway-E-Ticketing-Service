import React from 'react'
import Header from '../components/Header'
import HomeInfoDiv from '../components/HomeInfoDiv'
import Navbar from '../components/Navbar'
import PaymentLogos from '../components/PaymentLogos'

const Home = () => {
    return (
        <div>
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
