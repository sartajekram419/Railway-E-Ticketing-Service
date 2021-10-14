import Axios from 'axios';
import React, { Component } from 'react'

export class TrainCoachSeat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

        
    }
    
    render() {
        return (
            <div>
                {this.props.seatList.map((seat, index) => {
                        return <button key={index} value={seat}>
                            {seat}
                        </button>
                    })}
            </div>
        )
    }
}

export default TrainCoachSeat
