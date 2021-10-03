import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import VerifyTicket from './pages/verifyticket'
import ContactUs from './pages/contactus'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>

      <Switch>
        <Route path = '/' exact component={Home} />
        <Route path='/home' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/verify-ticket' exact component={VerifyTicket}/>
        <Route path='/contact-us' exact component={ContactUs}/>
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
