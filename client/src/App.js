import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import VerifyTicket from './pages/verifyticket'
import ContactUs from './pages/contactus'
import HomeUser from './pages/home-user'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { useState } from 'react'

function App() {

  return (
    <Router>

      <Switch>
        <Route exact path = '/' >
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/verify-ticket' >
          <VerifyTicket />
        </Route>
        <Route exact path='/contact-us' >
          <ContactUs />
        </Route>
        <Route exact path='/home-user' >
          <HomeUser />
        </Route>
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

export default App;
