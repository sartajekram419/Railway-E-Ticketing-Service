import React from 'react'
import { Container, Logos } from '../PaymentLogos/PaymentLogosElements'

const PaymentLogos = () => {
    return (
        <Container>

            <Logos src={`visa.png`}/>
            <Logos src={`mastercard.png`}/>
            <Logos src={`rocket.png`}/>
            <Logos src={`americanexpress.png`}/>
            <Logos src={`bkash.png`}/>
            <Logos src={`nexuspay.png`}/>
            
            
        </Container>
    )
}

export default PaymentLogos