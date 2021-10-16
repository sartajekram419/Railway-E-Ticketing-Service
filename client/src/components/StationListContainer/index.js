import React, { Component } from 'react'
import { Container, Table, Button } from './StationListContainerElements'
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
                width: "45%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2: {
                display: "flex",
                fontSize: "16px",
                padding: "10px 0px 10px 0px",
                justifyContent: "center",
                alignItems: "center",
            },
        }
    }


    deleteStationPressed = event => {
        event.preventDefault();


        Axios.post("http://localhost:3001/api/deleteStation", {
            station_name: this.props.item.Name,
        })
            .then((res) => {
                if (res.data.isValid) {
                    alert("Station Deleted Successfully!");
                } else {
                    alert("Error");
                }
            })

    };



    render() {
        return (
            <Container>
                <Table>
                    <tr>
                        <td style={this.state.styleCol1}>{this.props.item.Name}</td>
                        <td style={this.state.styleCol1}>{this.props.item.District}</td>
                        <td style={this.state.styleCol2}>
                            <Button onClick={this.deleteStationPressed}></Button>
                        </td>
                    </tr>

                </Table>
            </Container>
        )
    }
};