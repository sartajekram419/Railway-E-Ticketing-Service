import React, { Component } from 'react'
import { Container, Table } from './StationListContainerElements'
import Axios from 'axios'

export default class StationListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            styleRow: {
                borderTop: "1px solid #a4b0af",
            },
            styleCol1: {
                fontSize: "16px",
                padding: "10px 0px 10px 10px",
                width: "40%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2: {
                fontSize: "16px",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
            },
        }
    }

    render() {
        return (
            <Container>
                <Table>
                    <tr>
                        <td style={this.state.styleCol1}>{this.props.item.Name}</td>
                        <td style={this.state.styleCol2}>{this.props.item.District}</td>
                    </tr>

                </Table>
            </Container>
        )
    }
}