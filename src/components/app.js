import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Navbar from './Navbar';

export default function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/Blog' component = {Blog} />
          {/* <Route path = '/Login' component = {Login}/> */}
          <Redirect to ='/' />
        </Switch>
      </Router>
          
  
    </div>
   
  )
}