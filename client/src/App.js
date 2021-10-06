import './App.css'
import Home from './pagesUser/home'
import Login from './pagesUser/login'
import Register from './pagesUser/register'
import VerifyTicket from './pagesUser/verifyticket'
import ContactUs from './pagesUser/contactus'
import HomeUser from './pagesUser/home-user'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import VerifyTicketUser from './pagesUser/verifyticket-user'
import ContactUsUser from './pagesUser/contactus-user'
import Dashboard from './pagesUser/dashboard'
import { withRouter } from 'react-router'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      passengerMail: "",
      passengerNid: 0,
      passengerName: "",
      passengerMobile: 0,
      passengerPassword: "",
    }
    
    this.setPassengerMail = this.setPassengerMail.bind(this);
    this.setPassengerNid = this.setPassengerNid.bind(this);
    this.setPassengerName = this.setPassengerName.bind(this);
    this.setPassengerMobile = this.setPassengerMobile.bind(this);
    this.setPassengerPassword = this.setPassengerPassword.bind(this);
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  setPassengerMail(data) {
    return this.setState({
      ...this.state,
      passengerMail: data,
    });
  }

  setPassengerNid(data) {
    return this.setState({
      ...this.state,
      passengerNid: data,
    });
  }

  setPassengerName(data) {
    return this.setState({
      ...this.state,
      passengerName: data,
    });
  }

  setPassengerMobile(data) {
    return this.setState({
      ...this.state,
      passengerMobile: data,
    });
  }

  setPassengerPassword(data) {
    return this.setState({
      ...this.state,
      passengerPassword: data,
    });
  }


  render() {
    return (
      <Router>
  
        <Switch>
          <Route exact path = '/' 
          render={props => (
            <Home {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />
            
          <Route exact path='/home'
          render={props => (
            <Home {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />

          <Route exact path='/login'
          render={props => (
            <Login {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            setPassengerNid={this.setPassengerNid}
            passengerNid={this.state.passengerNid} 
            setPassengerName={this.setPassengerName}
            passengerName={this.state.passengerName} 
            setPassengerMobile={this.setPassengerMobile}
            passengerMobile={this.state.passengerMobile} 
            setPassengerPassword={this.setPassengerPassword}
            passengerPassword={this.state.passengerPassword}
            />
          )}
          />

          <Route exact path='/register'
          render={props => (
            <Register {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            setPassengerNid={this.setPassengerNid}
            passengerNid={this.state.passengerNid} 
            setPassengerName={this.setPassengerName}
            passengerName={this.state.passengerName} 
            setPassengerMobile={this.setPassengerMobile}
            passengerMobile={this.state.passengerMobile} 
            setPassengerPassword={this.setPassengerPassword}
            passengerPassword={this.state.passengerPassword} 
            />
          )}
          />
          
          <Route exact path='/verify-ticket' 
          render={props => (
            <VerifyTicket {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />
          
          <Route exact path='/contact-us' 
          render={props => (
            <ContactUs {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />
          
          <Route exact path='/home-user' 
          render={props => (
            <HomeUser {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />

          <Route exact path='/verify-ticket-user' 
          render={props => (
            <VerifyTicketUser {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />

          <Route exact path='/contact-us-user' 
          render={props => (
            <ContactUsUser {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            />
          )}
          />

          <Route exact path='/dashboard' 
          render={props => (
            <Dashboard {...props} 
            history={this.props.history} 
            setPassengerMail={this.setPassengerMail} 
            passengerMail={this.state.passengerMail} 
            setPassengerNid={this.setPassengerNid}
            passengerNid={this.state.passengerNid} 
            setPassengerName={this.setPassengerName}
            passengerName={this.state.passengerName} 
            setPassengerMobile={this.setPassengerMobile}
            passengerMobile={this.state.passengerMobile} 
            setPassengerPassword={this.setPassengerPassword}
            passengerPassword={this.state.passengerPassword} 
            />
          )}
          />
          
        </Switch>
  
      </Router>
    );
  }
  
}

export default withRouter(App)

