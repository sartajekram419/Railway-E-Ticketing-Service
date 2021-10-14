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
                {this.props.selectedCoachID}
            </div>
        )
    }
}

export default TrainCoachSeat
