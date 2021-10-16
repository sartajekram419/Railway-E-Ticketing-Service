import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container2, Heading, Table1, Table2, Button } from './ShowClerkContainerElements'
import Axios from 'axios'
import StationListContainer from '../StationListContainer';
import AddStationContainer from '../AddStationContainer';

class ShowClerkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            stationName: "",



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
            styleCol1Plain: {
                fontSize: "18px",

                padding: "10px 0px 10px 10px",
                width: "5%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2Plain: {
                fontSize: "18px",

                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol3Plain: {
                fontSize: "18px",

                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol4Plain: {
                fontSize: "18px",

                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol5Plain: {
                fontSize: "18px",

                width: "5%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
            },
            styleCol1: {
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px 0px 10px 10px",
                width: "5%",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol2: {
                fontSize: "18px",
                fontWeight: "bold",
                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol3: {
                fontSize: "18px",
                fontWeight: "bold",
                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
                borderRight: "1px solid #a4b0af",
            },
            styleCol4: {
                fontSize: "18px",
                fontWeight: "bold",
                width: "30%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",

            },
            styleCol5: {
                fontSize: "18px",
                fontWeight: "bold",
                width: "10%",
                padding: "10px 0px 10px 10px",
                verticalAlign: "top",
            },
        }

        // this.setClerkName = this.setClerkName.bind(this);
        // this.setClerkMobile = this.setClerkMobile.bind(this);
        // this.setClerkPassword = this.setClerkPassword.bind(this);
        // this.setClerkStationID = this.setClerkStationID.bind(this);
        this.setStationName = this.setStationName.bind(this);

        Axios.post("http://localhost:3001/api/getStationName", {
            stationID: this.props.clerkStationID,
        })

            .then((res) => {

                this.setStationName(res.data[0].Name)
            })


    }

    deleteClerkPressed = event => {
        event.preventDefault();


        Axios.post("http://localhost:3001/api/deleteClerk", {
            clerk_ID: this.props.clerkID,
        })
            .then((res) => {
                if (res.data.isValid) {
                    alert("Clerk Deleted Successfully!");
                } else {
                    alert("Error");
                }
            })

    };

    setStationName(data) {
        this.setState({
            stationName: data,
        })
    }



    render() {
        return (


            <Container2>
                <Heading>
                    <h2 style={this.state.styleHeading}>Clerk Information</h2>
                </Heading>

                <Table1>
                    <tr>
                        <td style={this.state.styleCol1}>ID</td>
                        <td style={this.state.styleCol2}>Name</td>
                        <td style={this.state.styleCol3}>Mobile</td>
                        <td style={this.state.styleCol4}>Station</td>
                        <td style={this.state.styleCol5}></td>
                    </tr>
                </Table1>
                <Table2>
                    <tr>
                        <td style={this.state.styleCol1Plain}>{this.props.clerkID}</td>
                        <td style={this.state.styleCol2Plain}>{this.props.clerkName}</td>
                        <td style={this.state.styleCol3Plain}>0{this.props.clerkMobile}</td>
                        <td style={this.state.styleCol4Plain}>{this.state.stationName}</td>
                        <td style={this.state.styleCol5}>
                            <Button onClick={this.deleteClerkPressed}></Button>
                        </td>
                    </tr>

                </Table2>

            </Container2>


        )
    }
}

export default withRouter(ShowClerkContainer)

