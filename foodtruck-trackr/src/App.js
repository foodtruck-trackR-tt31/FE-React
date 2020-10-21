import React from 'react';
import { Route, NavLink, Switch, useHistory, Link } from 'react-router-dom'
import OperatorDashboard from './components/OperatorDashboard'
import DinerDashboard from './components/DinerDashboard'
import Truck from './components/Truck'
import Signin from './components/Signin'
import Signup from './components/Signup'
import './App.css';


function App() {
  return (
    <div className="App">
        <NavLink to='/operatordashboard'>Operator Dashboard</NavLink>
        <NavLink to='/dinerdashboard'>Diner Dashboard</NavLink>
        <div className="nav-links">
            <img className="logo" src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146__340.png" alt="" />
            <h1>Food Truck</h1>
            <Link to ='/signin'><li>Sign In</li></Link>
            <Link to='/signup'><li>Sign Up</li></Link>
        </div>
        
        <Switch>

          <Route path = '/home'/>

          
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>

          <Route path ='/operatordashboard'>
            <OperatorDashboard/>
          </Route>

          <Route path ='/dinerdashboard'>
            <DinerDashboard/>
          </Route>

        </Switch>

      
    </div>
  );
}

export default App;
