import './App.css';
import Home from './pagesUser/home'
import Login from './pagesUser/login'
import Register from './pagesUser/register'
import VerifyTicket from './pagesUser/verifyticket'
import ContactUs from './pagesUser/contactus'
import HomeUser from './pagesUser/home-user'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import VerifyTicketUser from './pagesUser/verifyticket-user';
import ContactUsUser from './pagesUser/contactus-user';
import Dashboard from './pagesUser/dashboard';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      passengerMail: {},
    }
    
    this.setPassengerMail = this.setPassengerMail.bind(this);
  }

  setPassengerMail(data) {
    this.setState({
      passengerMail: data,
    });
  }

  render() {
    return (
      <Router>
  
        <Switch>
          <Route exact path = '/' 
          render={props => (
            <Home {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
            
          <Route exact path='/home'
          render={props => (
            <Home {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/login'
          render={props => (
            <Login {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/register'
          render={props => (
            <Register {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/verify-ticket' 
          render={props => (
            <VerifyTicket {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/contact-us' 
          render={props => (
            <ContactUs {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/home-user' 
          render={props => (
            <HomeUser {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/verify-ticket-user' 
          render={props => (
            <VerifyTicketUser {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/contact-us-user' 
          render={props => (
            <ContactUsUser {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/dashboard' 
          render={props => (
            <Dashboard {...props} history={this.props.history} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
        </Switch>
  
      </Router>
    );
  }
  
}

