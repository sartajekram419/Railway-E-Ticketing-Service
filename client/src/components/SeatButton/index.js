import Axios from 'axios';
import React, { Component } from 'react'
import { Button } from './SeatButtonElements';

export class SeatButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seatStatus: true,
        }

        // if(this.props.seatStatusList.find(this.props.seat))
        // this.setState({seatStatus: true})
    }
    
    render() {
        return (
            <Button seat={this.props.seat} seatStatus={this.props.seatStatus}>
                {this.props.seat}
            </Button>
        )
    }
}

export default SeatButton
