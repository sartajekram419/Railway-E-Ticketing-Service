import Axios from 'axios';
import React, { Component } from 'react'
import { SeatButton } from '../SeatButton';

export class TrainCoachSeat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "0px 4% 0px 0px",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%"
            },
            seatStatusList: [true, false, true, false, true, true, true],
            
        }
    }
    
    render() {
        return (
            <div style={this.state.style}>
                {this.props.seatList.map((seat, index) => {
                        return <SeatButton key={index} seat={seat} seatStatus={this.state.seatStatusList[index]}/>
                })}
            </div>
        )
    }
}

export default TrainCoachSeat
