import Axios from 'axios';
import React, { Component } from 'react'
import { Button } from './SeatButtonElements';

export class SeatButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChosen: false,
        }

        // if(this.props.seatStatusList.find(this.props.seat))
        // this.setState({seatStatus: true})

        this.toggleIsChosen = this.toggleIsChosen.bind(this);
    }

    toggleIsChosen = () => {
        if(this.state.isChosen) {
            this.props.removeChosenSeatList(this.props.seat);
        } else {
            this.props.addChosenSeatList(this.props.seat);
        }

        this.setState({
            isChosen: !this.state.isChosen,
        })
    }
    
    render() {
        return (
            <Button seat={this.props.seat} seatStatus={this.props.seatStatus} isChosen={this.state.isChosen} onClick={this.toggleIsChosen}>
                {this.props.seat}
            </Button>
        )
    }
}

export default SeatButton
