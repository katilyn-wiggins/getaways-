import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail'; 
import User from '../../containers/User';
import Login from '../../containers/Login';
import './app.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default function App() {
  return (
  <div>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/user">Register</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route
          path="/"
          exact
          component={Getaways}
        />
         <Route
          path="/user"
          exact
          component={User}
          /> 
        <Route
          path="/login"
          exact
          component={Login}
        />
        <Route
          path="/:id"
          exact
          component={GetawayDetail}
          /> 
       
      </Switch>
    </Router>
    </div>);
}



