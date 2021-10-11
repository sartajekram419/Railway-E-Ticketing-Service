import React, { Component } from 'react'
import { Container, Select, InputContainerRight, InputContainerLeft, SpaceContainer } from './FindCardElements'

export default class FindCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleLabel: {
                color: "#fff",
                fontWeight: 'bold',
                padding: "0px 0px 8px 0px",
            },
        }
    }


    render() {
        return (
            <Container>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>From</label>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>To</label>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Date</label>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                <label style={this.state.styleLabel}>Passenger(s)</label>
                    <Select>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerRight>
            </Container>
        )
    }
}
