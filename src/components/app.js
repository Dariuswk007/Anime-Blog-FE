import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Navbar from './Navbar';
// import login from './Login';

export default function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/Blog' component = {Blog} />
          {/* <Route path = '/Login' component = {login}/> : to be added later */}
          <Redirect to ='/' />
        </Switch>
      </Router>
          
  
    </div>
   
  )
}