import './App.css'
import Home from './pagesUser/home'
import Login from './pagesUser/login'
import Register from './pagesUser/register'
import VerifyTicket from './pagesUser/verifyticket'
import ContactUs from './pagesUser/contactus'
import HomeUser from './pagesUser/home-user'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import VerifyTicketUser from './pagesUser/verifyticket-user'
import ContactUsUser from './pagesUser/contactus-user'
import { withRouter } from 'react-router'
import DashboardUser from './pagesUser/dashboard-user'
import AdminLogin from './pagesAdmin/admin-login'
import HomeAdmin from './pagesAdmin/stations'
import TrainList from './pagesUser/trainlist'
import TrainListUser from './pagesUser/trainlist-user'
import TrainCoach from './pagesUser/traincoach'
import Clerks from './pagesAdmin/clerks'
import ClerkLogin from './pagesClerk/clerk-login'
import HomeClerk from './pagesClerk/clerk-home'
import TrainListClerk from './pagesClerk/trainlist-clerk'
import { TrainCoachClerk } from './pagesClerk/traincoach-clerk'
import Trains from './pagesAdmin/trains'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      passengerMail: "",
      passengerNid: 0,
      passengerName: "",
      passengerMobile: 0,
      passengerPassword: "",

      fromStationID: 0,
      toStationID: 0,
      fromStationPosition: 11,
      toStationPosition: 13,
      journeyDate: 0,
      classID: 0,
      noOfPassengers: 0,

      selectedTrainIDFromPositionToPosition: null,

      selectedTrainID: 1,
      selectedCoachID: 1,
      selectedSeats: [],

      adminID: 0,

      clerkID: 0,
      // clerkName: "",
      // clerkMobile: 0,
      // clerkPassword: "",
      // clerkStationID: 0,
    }

    this.setSelectedTrainIDFromPositionToPosition = this.setSelectedTrainIDFromPositionToPosition.bind(this);

    this.setPassengerMail = this.setPassengerMail.bind(this);
    this.setPassengerNid = this.setPassengerNid.bind(this);
    this.setPassengerName = this.setPassengerName.bind(this);
    this.setPassengerMobile = this.setPassengerMobile.bind(this);
    this.setPassengerPassword = this.setPassengerPassword.bind(this);


    this.setFromStationID = this.setFromStationID.bind(this);
    this.setToStationID = this.setToStationID.bind(this);
    this.setFromStationPosition = this.setFromStationPosition.bind(this);
    this.setToStationPosition = this.setToStationPosition.bind(this);
    this.setJourneyDate = this.setJourneyDate.bind(this);
    this.setClassID = this.setClassID.bind(this);
    this.setNoOfPassengers = this.setNoOfPassengers.bind(this);

    this.setSelectedTrainID = this.setSelectedTrainID.bind(this);
    this.setSelectedCoachID = this.setSelectedCoachID.bind(this);
    this.setSelectedSeats = this.setSelectedSeats.bind(this);

    this.setAdminID = this.setAdminID.bind(this);

    this.setClerkID = this.setClerkID.bind(this);
    // this.setClerkName = this.setClerkName(this);
    // this.setClerkMobile = this.setClerkMobile(this);
    // this.setClerkPassword = this.setClerkPassword(this);
    // this.setClerkStationID = this.setClerkStationID(this);

  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  setSelectedTrainIDFromPositionToPosition(data) {
    return this.setState({
      ...this.state,
      selectedTrainIDFromPositionToPosition: data,
    });
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




  setFromStationID(data) {
    return this.setState({
      ...this.state,
      fromStationID: data,
    });
  }

  setToStationID(data) {
    return this.setState({
      ...this.state,
      toStationID: data,
    });
  }

  setFromStationPosition(data) {
    return this.setState({
      ...this.state,
      fromStationPosition: data,
    });
  }

  setToStationPosition(data) {
    return this.setState({
      ...this.state,
      toStationPosition: data,
    });
  }

  setJourneyDate(data) {
    return this.setState({
      ...this.state,
      journeyDate: data,
    });
  }

  setClassID(data) {
    return this.setState({
      ...this.state,
      classID: data,
    });
  }

  setNoOfPassengers(data) {
    return this.setState({
      ...this.state,
      noOfPassengers: data,
    });
  }



  setSelectedTrainID(data) {
    return this.setState({
      ...this.state,
      selectedTrainID: data,
    });
  }

  setSelectedCoachID(data) {
    return this.setState({
      ...this.state,
      selectedCoachID: data,
    });
  }

  setSelectedSeats(data) {
    return this.setState({
      ...this.state,
      selectedSeats: data,
    });
  }


  setAdminID(data) {
    return this.setState({
      ...this.state,
      adminID: data,
    });
  }


  setClerkID(data) {
    return this.setState({
      ...this.state,
      clerkID: data,
    });
  }


  setClerkName(data) {
    return this.setState({
      ...this.state,
      clerkName: data,
    });
  }


  setClerkMobile(data) {
    return this.setState({
      ...this.state,
      clerkMobile: data,
    });
  }


  setClerkPassword(data) {
    return this.setState({
      ...this.state,
      clerkPassword: data,
    });
  }


  setClerkStationID(data) {
    return this.setState({
      ...this.state,
      clerkStationID: data,
    });
  }



  render() {
    return (
      <Router>

        <Switch>

          <Route exact path='/'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
                  <Home {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
    
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                  />
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/home-user" />
                }
              </div>
            )}
          />

          <Route exact path='/home'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
                  <Home {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
    
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                  />
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/home-user" />
                }
              </div>
            )}
          />

          <Route exact path='/login'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
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
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/home-user" />
                }
              </div>
              
            )}
          />

          <Route exact path='/register'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
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
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/home-user" />
                }
              </div>

              
            )}
          />

          <Route exact path='/verify-ticket'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
                  <VerifyTicket {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                />
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/verify-ticket-user" />
                }
              </div>
              
            )}
          />

          <Route exact path='/contact-us'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
                  <ContactUs {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                />
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/contact-us-user" />
                }
              </div>
              
            )}
          />

          <Route exact path='/home-user'
            render={props => (
              <div>
                {this.state.passengerMail != "" && 
                  <HomeUser {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
  
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.passengerMail == "" && 
                  <Redirect to="/home" />
                }
              </div>
              
            )}
          />

          <Route exact path='/verify-ticket-user'
            render={props => (
              <div>
                {this.state.passengerMail != "" && 
                  <VerifyTicketUser {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                />
                }

                {this.state.passengerMail == "" && 
                  <Redirect to="/verify-ticket" />
                }
              </div>
              
            )}
          />

          <Route exact path='/contact-us-user'
            render={props => (
              <div>
                {this.state.passengerMail != "" && 
                  <ContactUsUser {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                />
                }

                {this.state.passengerMail == "" && 
                  <Redirect to="/contact-us" />
                }
              </div>
              
            )}
          />

          <Route exact path='/dashboard-user'
            render={props => (
              <div>
                {this.state.passengerMail != "" && 
                  <DashboardUser {...props}
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
                }

                {this.state.passengerMail == "" && 
                  <Redirect to="/login" />
                }
              </div>
              
            )}
          />

          <Route exact path='/admin-login'
            render={props => (
              <div>
                {this.state.adminID == 0 && 
                  <AdminLogin {...props}
                  history={this.props.history}
                  setAdminID={this.setAdminID}
                  adminID={this.state.adminID}
                />
                }

                {this.state.adminID != 0 && 
                  <Redirect to="/stations" />
                }
              </div>
              
            )}
          />

          <Route exact path='/clerk-login'
            render={props => (
              <div>
                {this.state.clerkID == 0 && 
                  <ClerkLogin {...props}
                  history={this.props.history}
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.clerkID != 0 && 
                  <Redirect to="/clerk-home" />
                }
              </div>
              
            )}
          />

          <Route exact path='/clerk-home'
            render={props => (
              <div>
                {this.state.clerkID != 0 && 
                  <HomeClerk {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}

                  setPassengerNid={this.setPassengerNid}
                  passengerNid={this.state.passengerNid}
  
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.clerkID == 0 && 
                  <Redirect to="/clerk-login" />
                }
              </div>
              
            )}
          />

          <Route exact path='/stations'
            render={props => (
              <div>
                {this.state.adminID != 0 && 
                  <HomeAdmin {...props}
                  history={this.props.history}
                  setAdminID={this.setAdminID}
                  adminID={this.state.adminID}
                />
                }

                {this.state.adminID == 0 && 
                  <Redirect to="/admin-login" />
                }
              </div>
              
            )}
          />

          <Route exact path='/clerks'
            render={props => (
              <div>
                {this.state.adminID != 0 && 
                  <Clerks {...props}
                  history={this.props.history}
                  setAdminID={this.setAdminID}
                  adminID={this.state.adminID}
                // clerkID={this.state.clerkID}
                // clerkName={this.clerkName}
                // clerkMobile={this.clerkMobile}
                // clerkPassword={this.clerkPassword}
                // clerkStationID={this.clerkStationID}
                />
                }

                {this.state.adminID == 0 && 
                  <Redirect to="/admin-login" />
                }
              </div>
              
            )}
          />

          <Route exact path='/trains'
            render={props => (
              <div>
                {this.state.adminID != 0 && 
                  <Trains {...props}
                  history={this.props.history}
                  setAdminID={this.setAdminID}
                  adminID={this.state.adminID}
                />
                }

                {this.state.adminID == 0 && 
                  <Redirect to="/admin-login" />
                }
              </div>
              
            )}
          />


          <Route exact path='/trainlist'
            render={props => (
              <div>
                {this.state.passengerMail == "" && 
                  <TrainList {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
  
                  selectedTrainIDFromPositionToPosition={this.state.selectedTrainIDFromPositionToPosition}
                  setSelectedTrainIDFromPositionToPosition={this.setSelectedTrainIDFromPositionToPosition}
                
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.passengerMail != "" && 
                  <Redirect to="/trainlist-user" />
                }
              </div>
              
            )}
          />

          <Route exact path='/trainlist-user'
            render={props => (
              <div>
                {this.state.passengerMail != "" && 
                  <TrainListUser {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
  
                  selectedTrainIDFromPositionToPosition={this.state.selectedTrainIDFromPositionToPosition}
                  setSelectedTrainIDFromPositionToPosition={this.setSelectedTrainIDFromPositionToPosition}
                
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.passengerMail == "" && 
                  <Redirect to="/trainlist" />
                }
              </div>
              
            )}
          />

          <Route exact path='/trainlist-clerk'
            render={props => (
              <div>
                {this.state.clerkID != 0 && 
                  <TrainListClerk {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
  
                  selectedTrainIDFromPositionToPosition={this.state.selectedTrainIDFromPositionToPosition}
                  setSelectedTrainIDFromPositionToPosition={this.setSelectedTrainIDFromPositionToPosition}
  
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.clerkID == 0 && 
                  <Redirect to="/clerk-login" />
                }
              </div>
              
            )}
          />

          <Route exact path='/traincoach'
            render={props => (
              <TrainCoach {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                
                setPassengerNid={this.setPassengerNid}
                passengerNid={this.state.passengerNid}
                
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}

                setSelectedCoachID={this.setSelectedCoachID}
                selectedCoachID={this.state.selectedCoachID}
                setSelectedSeats={this.setSelectedSeats}
                selectedSeats={this.state.selectedSeats}

                selectedTrainIDFromPositionToPosition={this.state.selectedTrainIDFromPositionToPosition}
                setSelectedTrainIDFromPositionToPosition={this.setSelectedTrainIDFromPositionToPosition}
              />
            )}
          />

          <Route exact path='/traincoach-clerk'
            render={props => (
              <div>
                {this.state.clerkID != 0 && 
                  <TrainCoachClerk {...props}
                  history={this.props.history}
                  setPassengerMail={this.setPassengerMail}
                  passengerMail={this.state.passengerMail}
                  
                  setPassengerNid={this.setPassengerNid}
                  passengerNid={this.state.passengerNid}
                  
                  setFromStationID={this.setFromStationID}
                  fromStationID={this.state.fromStationID}
                  setToStationID={this.setToStationID}
                  toStationID={this.state.toStationID}
                  setFromStationPosition={this.setFromStationPosition}
                  fromStationPosition={this.state.fromStationPosition}
                  setToStationPosition={this.setToStationPosition}
                  toStationPosition={this.state.toStationPosition}
                  setJourneyDate={this.setJourneyDate}
                  journeyDate={this.state.journeyDate}
                  setClassID={this.setClassID}
                  classID={this.state.classID}
                  setNoOfPassengers={this.setNoOfPassengers}
                  noOfPassengers={this.state.noOfPassengers}
                  setSelectedTrainID={this.setSelectedTrainID}
                  selectedTrainID={this.state.selectedTrainID}
  
                  setSelectedCoachID={this.setSelectedCoachID}
                  selectedCoachID={this.state.selectedCoachID}
                  setSelectedSeats={this.setSelectedSeats}
                  selectedSeats={this.state.selectedSeats}
  
                  selectedTrainIDFromPositionToPosition={this.state.selectedTrainIDFromPositionToPosition}
                  setSelectedTrainIDFromPositionToPosition={this.setSelectedTrainIDFromPositionToPosition}
  
                  setClerkID={this.setClerkID}
                  clerkID={this.state.clerkID}
                />
                }

                {this.state.clerkID == 0 && 
                  <Redirect to="/clerk-login" />
                }
              </div>
              
            )}
          />


        </Switch>

      </Router>
    );
  }

}

export default withRouter(App)

