import React, { Component } from 'react'
import { Container, Select, InputContainerRight, InputContainerLeft, SpaceContainer, Button } from './FindCardElements'
import Axios from 'axios'

export default class FindCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleLabel: {
                color: "#fff",
                fontWeight: 'bold',
                padding: "0px 0px 8px 0px",
            },
            date: new Date(),
            stationList: [],
        }

        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for(var i in res.data) {
                var object = res.data[i].Name;

                this.setState({ stationList: [...this.state.stationList, ...[object] ] })
            }
        })



        //this.loginPressed = this.loginPressed.bind(this);


    }

    // loginPressed = event => {
    //     event.preventDefault();

    //     alert(this.props.passengerMail);

    //     Axios.post("http://localhost:3001/api/loginPassenger", {
    //         email: this.state.email,
    //         password: this.state.password,
    //     })
    //         .then((res) => {
    //             if (res.data.isValid == true) {
    //                 this.props.setPassengerMail(this.state.email);
    //                 this.props.setPassengerNid(res.data.nid);
    //                 this.props.setPassengerName(res.data.name);
    //                 this.props.setPassengerMobile(res.data.mobile);
    //                 this.props.setPassengerPassword(res.data.password);
    //                 this.setEmail("-1");
    //             } else {

    //             }
    //         })

    //     // if(this.state.email != "") {
    //     //     this.props.history.push({pathname: '/home-user'});
    //     // }
    // };

    render() {
        return (
            <Container>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>From</label>
                    <Select>
                        <option value="" disabled selected>Select a station</option>
                        {this.state.stationList.map((station,index)=>{
                        return <option key={index} value={station}>
                                {station}
                                </option>
                        })}
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>To</label>
                    <Select>
                        <option value="" disabled selected>Select a station</option>
                        {this.state.stationList.map((station,index)=>{
                        return <option key={index} value={station}>
                                {station}
                                </option>
                        })}
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Date</label>
                    <Select>
                        <option value="" disabled selected>Select a date</option>
                        <option value="fsfasf" >fsfsf</option>
                        <option value="qqqqqq">qqqqqqq</option>
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                <label style={this.state.styleLabel}>Class</label>
                    <Select>
                        <option value="" disabled selected>Select a class</option>
                        <option value="1" >AC</option>
                        <option value="2">Non-AC</option>
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Passenger(s)</label>
                    <Select>
                        <option value="" disabled selected>No of passenger(s)</option>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                </InputContainerLeft>

                <Button onClick={this.loginPressed}>Find</Button>

            </Container>
        )
    }
}
