import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container2, Heading, Table, Button } from '../StationList/StationListElements'
import Axios from 'axios'
import StationListContainer from '../StationListContainer';

class StationList extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            password: "",

            station_name: "",
            station_district: "",

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
                width: "40%",
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
            // nid: this.props.passengerNid,
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

        // this.loginPressed = this.loginPressed.bind(this);

        //this.setEmail = this.setEmail.bind(this);
        // this.setPassword = this.setPassword.bind(this);
    }

    loginPressed = event => {
        event.preventDefault();

        alert(this.props.passengerMail);

        Axios.post("http://localhost:3001/api/loginPassenger", {
            email: this.state.email,
            password: this.state.password,
        })
            .then((res) => {
                if (res.data.isValid == true) {
                    this.props.setPassengerMail(this.state.email);
                    this.props.setPassengerNid(res.data.nid);
                    this.props.setPassengerName(res.data.name);
                    this.props.setPassengerMobile(res.data.mobile);
                    this.props.setPassengerPassword(res.data.password);
                    this.setEmail("-1");
                } else {

                }
            })
    };

    addNewStation = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addNewStation", {
            station_name: "Airport",
            station_district: "Dacca",
        })
            .then((res) => {
                if (res.affectedRows == 0) {
                    alert("Station already exits!");
                } else {
                    alert("Station is not added!");
                }

            })

    };

    // setEmail(data) {
    //     this.setState({
    //         email: data,
    //     },()=>{
    //         if(this.state.email != "" && this.state.email =="-1") {
    //             this.props.history.push({pathname: '/home-user'});
    //         }
    //     })
    // }

    // setPassword(data) {
    //     this.setState({
    //         password: data,
    //     })
    // }

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
            </div>

        )
    }
}

export default withRouter(StationList)

