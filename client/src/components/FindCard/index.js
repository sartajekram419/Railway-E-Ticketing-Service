import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Select, InputContainerRight, InputContainerLeft, SpaceContainer, Button } from './FindCardElements'
import Axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../App.css'


class FindCard extends Component {

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

            selectedFromStationName: "",
            selectedToStationName: "",
            selectedDate: null,
            selectedClassID: 0,
            selectedNoOfPassengers: 0, 
            
        }

        
        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for (var i in res.data) {
                var object = res.data[i].Name;

                this.setState({ stationList: [...this.state.stationList, ...[object]] })
            }
        })

        
        this.setSelectedFromStationName = this.setSelectedFromStationName.bind(this);
        this.setSelectedToStationName = this.setSelectedToStationName.bind(this);
        this.setSelectedDate = this.setSelectedDate.bind(this);
        this.setSelectedClassID = this.setSelectedClassID.bind(this);
        this.setSelectedNoOfPassengers = this.setSelectedNoOfPassengers.bind(this);

        this.findPressed = this.findPressed.bind(this);

    }
    
    setSelectedFromStationName(data) {
        this.setState({
            selectedFromStationName: data,
        })
    }

    setSelectedToStationName(data) {
        this.setState({
            selectedToStationName: data,
        })
    }

    setSelectedDate(data) {
        this.setState({
            selectedDate: data,
        })
    }

    setSelectedClassID(data) {
        this.setState({
            selectedClassID: data,
        })
    }

    setSelectedNoOfPassengers(data) {
        this.setState({
            selectedNoOfPassengers: data,
        })
    }

    findPressed = event => {
        event.preventDefault();

        
        Axios.post("http://localhost:3001/api/getStationIDForFindCard", {
            stationName: this.state.selectedFromStationName,
        })
        .then((res) => {
            this.props.setFromStationID(res.data[0].Station_ID);
            this.props.setJourneyDate(this.state.selectedDate);

            //alert(this.props.fromStationID);
        
            this.props.setClassID(parseInt(this.state.selectedClassID));

            this.props.setNoOfPassengers(parseInt(this.state.selectedNoOfPassengers));

        })

        Axios.post("http://localhost:3001/api/getStationIDForFindCard", {
            stationName: this.state.selectedToStationName,
        })
        .then((res) => {
            this.props.setToStationID(res.data[0].Station_ID);
            //alert(this.props.toStationID);
            if(this.props.passengerMail == "")
                this.props.history.push({ pathname: '/trainlist' });
            else
            this.props.history.push({ pathname: '/trainlist-user' });
        })
        
    };

    render() {
        return (
            <Container>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>From</label>
                    <Select onChange={(e) => { this.setSelectedFromStationName(e.target.value) }} >
                        <option value="" disabled selected>Select a station</option>
                        {this.state.stationList.map((station, index) => {
                            return <option key={index} value={station}>
                                {station}
                            </option>
                        })}
                    </Select>
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>To</label>
                    <Select onChange={(e) => { this.setSelectedToStationName(e.target.value) }} >
                        <option value="" disabled selected>Select a station</option>
                        {this.state.stationList.map((station, index) => {
                            return <option key={index} value={station}>
                                {station}
                            </option>
                        })}
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Date</label>
                    <DatePicker
                    wrapperClassName="datePicker"
                    calendarClassName="red-border"
                    placeholderText="Select a date"
                    selected={this.state.selectedDate}
                    onChange={date => this.setSelectedDate(date)}
                    dateFormat='yyyy-MM-dd'
                    minDate={new Date()}
                    maxDate={new Date(new Date().getTime()+(1*24*60*60*1000))}
                    />
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>Class</label>
                    <Select onChange={(e) => { this.setSelectedClassID(e.target.value) }} >
                        <option value="" disabled selected>Select a class</option>
                        <option value="1" >AC</option>
                        <option value="2">Non-AC</option>
                    </Select>
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Passenger(s)</label>
                    <Select onChange={(e) => { this.setSelectedNoOfPassengers(e.target.value) }} >
                        <option value="" disabled selected>No of passenger(s)</option>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                </InputContainerLeft>

                <Button onClick={this.findPressed}>Find</Button>

            </Container>
        )
    }
}

export default withRouter(FindCard)