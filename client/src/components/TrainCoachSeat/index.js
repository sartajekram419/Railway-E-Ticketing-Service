import Axios from 'axios';
import React, { Component } from 'react'
import { SeatButton } from '../SeatButton';

export class TrainCoachSeat extends Component {
    constructor(props) {
        super(props);

        this.state = {

            seatStatusList: [true, false, true, false, true, true, true],
            
        }
    }
    
    render() {
        return (
            <div>
                {this.props.seatList.map((seat, index) => {
                        return <SeatButton key={index} seat={seat} seatStatus={this.state.seatStatusList[index]}/>
                })}
            </div>
        )
    }
}

export default TrainCoachSeat
