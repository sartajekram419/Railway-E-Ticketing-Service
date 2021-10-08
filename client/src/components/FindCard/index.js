import React, { Component } from 'react'
import { Container, Select, InputContainerRight, InputContainerLeft, SpaceContainer } from './FindCardElements'

export default class FindCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }


    render() {
        return (
            <Container>
                <InputContainerLeft>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerRight>
            </Container>
        )
    }
}
