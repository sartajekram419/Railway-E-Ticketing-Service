import React, { Component } from 'react'
import { Container, TextBox, FindCardBox } from './HeaderElements'
import FindCard from '../FindCard'

export default class Header extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
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
}

