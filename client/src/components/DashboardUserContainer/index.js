import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container2, Heading, UserInfoContainer, Container1, InfoDiv } from '../DashboardUserContainer/DashboardUserContainerElements'
import Axios from 'axios'
import JourneyUserContainer from '../JourneyUserContainer';

class DashboardUserContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            password: "",

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
        }


        Axios.post("http://localhost:3001/api/getPassengerJourneys", {
            nid: this.props.passengerNid,
        })
        .then((res) => {
            for(var i in res.data) {
                var object = {
                    Ticket_ID:  res.data[i].Ticket_ID,
                    Train_ID: res.data[i].Train_ID,
                    Coach_ID: res.data[i].Coach_ID,
                    No_of_seats: res.data[i].No_of_seats,
                    Start_position: res.data[i].Start_position,
                    End_position: res.data[i].End_position,
                    Journey_time: res.data[i].Journey_time,
                    Issue_time: res.data[i].Issue_time,
                };

                this.setState({ items: [...this.state.items, ...[object] ] })
            }
        })

        this.loginPressed = this.loginPressed.bind(this);

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginPressed = event => {
        event.preventDefault();

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

    setEmail(data) {
        this.setState({
            email: data,
        },()=>{
            if(this.state.email != "" && this.state.email =="-1") {
                this.props.history.push({pathname: '/home-user'});
            }
        })
    }

    setPassword(data) {
        this.setState({
            password: data,
        })
    }

    render() {
        return (
            <div>

                <Container1>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Personal Information</h2>
                    </Heading>

                    <UserInfoContainer>
                        <InfoDiv>
                            <label style={this.state.styleLabel}>Name:</label>
                            <text style={this.state.styleText}>{this.props.passengerName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Email:</label>
                            <text style={this.state.styleText}>{this.props.passengerMail}</text>
                        </InfoDiv>

                        {/* <InfoDiv>
                            <label style={this.state.styleLabel}>National ID:</label>
                            <text style={this.state.styleText}>{this.props.passengerNid}</text>
                        </InfoDiv> */}

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Mobile No:</label>
                            <text style={this.state.styleText}>0{parseInt(this.props.passengerMobile)}</text>
                        </InfoDiv>
                    </UserInfoContainer>
                </Container1>

                <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Upcoming Journeys</h2>
                    </Heading>

                    {this.state.items.map((item,index)=>{
                        return <JourneyUserContainer 
                                key={index}
                                item={item}
                                />
                    })}

                </Container2>

            </div>
            
        )
    }
}

export default withRouter(DashboardUserContainer)

