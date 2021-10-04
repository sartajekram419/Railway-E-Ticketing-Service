import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import VerifyTicket from './pages/verifyticket'
import ContactUs from './pages/contactus'
import HomeUser from './pages/home-user'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component, useState } from 'react'

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
            <Home {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
            
          <Route exact path='/home'
          render={props => (
            <Home {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/login'
          render={props => (
            <Login {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />

          <Route exact path='/register'
          render={props => (
            <Register {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/verify-ticket' 
          render={props => (
            <VerifyTicket {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/contact-us' 
          render={props => (
            <ContactUs {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
          
          <Route exact path='/home-user' 
          render={props => (
            <HomeUser {...props} setPassengerMail={this.setPassengerMail} passengerMail={this.state.passengerMail} />
          )}
          />
        </Switch>
      
        <Route
          render={() => {
          return (
              <Redirect
                to={{
                  pathname: window.location.pathname,
                }}
                
              />
          );
        }}
        />
  
      </Router>
    );
  }
  
}

