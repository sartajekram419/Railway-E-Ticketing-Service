import Axios from 'axios';
import React, { Component } from 'react'
import { Button } from './SeatButtonElements';

export class SeatButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    render() {
        return (
            <Button seatStatus={this.props.seatStatus}>
                {this.props.seat}
            </Button>
        )
    }
}

export default SeatButton
