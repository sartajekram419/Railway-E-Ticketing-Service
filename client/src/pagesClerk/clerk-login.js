import React, { Component } from 'react'
import ClerkLoginForm from '../components/ClerkLoginForm'

export default class ClerkLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }
        //alert(this.props.clerkID);
    }

    render() {
        return (
            <div style={this.state.style}>

                <ClerkLoginForm
                    setClerkID={this.props.setClerkID}
                    clerkID={this.props.clerkID}
                />
            </div>
        )
    }
}

