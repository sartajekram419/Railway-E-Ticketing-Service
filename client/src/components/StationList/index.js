import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container2, Heading, Table, Button } from '../StationList/StationListElements'
import Axios from 'axios'
import StationListContainer from '../StationListContainer';
import AddStationContainer from '../AddStationContainer';

class StationList extends Component {

    constructor(props) {
        super(props);

        this.state = {


            isAddStationContainerOpen: false,


            items: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleInput: {
                height: "40px",
                padding: "0px 0px 0px 10px",
            },
            styleLabel: {
                fontSize: "20px",
                fontWeight: "bold",
                padding: "5px 0px 5px 0px",
            },
            styleText: {
                fontSize: "20px",
                padding: "5px 0px 5px 0px",
            },
            styleHr: {
                background: "transparent",
                color: "transparent",
                margin: "0",
                borderStyle: "none",
                height: "1vw",
            },

            styleRow: {
                borderTop: "1px solid #a4b0af",
            },
            styleCol1: {
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px 0px 10px 10px",
                width: "45%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2: {
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
            },
        }


        Axios.post("http://localhost:3001/api/getStation", {

        })
            .then((res) => {
                for (var i in res.data) {
                    var object = {
                        Name: res.data[i].Name,
                        District: res.data[i].District,

                    };

                    this.setState({ items: [...this.state.items, ...[object]] })
                }
            })


        this.setIsAddStationContainerOpen = this.setIsAddStationContainerOpen.bind(this);
    }


    addNewStation = event => {
        event.preventDefault();

        this.setState({
            isAddStationContainerOpen: !this.state.isAddStationContainerOpen,
        })

    };



    setIsAddStationContainerOpen() {
        this.setState({
            isAddStationContainerOpen: !this.state.isAddStationContainerOpen,
        })
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>

                <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Station List</h2>
                    </Heading>

                    <Table>
                        <tr>
                            <td style={this.state.styleCol1}>Station Name</td>
                            <td style={this.state.styleCol2}>District</td>
                        </tr>

                    </Table>

                    {this.state.items.map((item, index) => {
                        return <StationListContainer
                            key={index}
                            item={item}
                        />
                    })}

                </Container2>

                <Button onClick={this.addNewStation}>Add New Station</Button>

                {this.state.isAddStationContainerOpen && <AddStationContainer setIsAddStationContainerOpen={this.setIsAddStationContainerOpen} isAddStationContainerOpen={this.state.isAddStationContainerOpen} />}

            </div>

        )
    }
}

export default withRouter(StationList)

