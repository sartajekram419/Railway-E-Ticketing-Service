import React from 'react'
import { Container, TextBox, FindCardBox } from './HeaderElements'
import FindCard from '../FindCard'

const Header = () => {
    return (
        <Container>

            <TextBox>
                <h1>Welcome to <br/>Railway <br/>E-Ticketing Service</h1>
            </TextBox>

            <FindCardBox>
                <FindCard/>
            </FindCardBox>
            
            
        </Container>
    )
}

export default Header