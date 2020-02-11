import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/Components/layout/Nav'
import Splash from './Components/SplashPage/Splash'
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Leaderboard from '../src/Components/Leaderboard/Leaderboard'

// pages
import Register from '../src/Components/auth/Register';
import Login from '../src/Components/auth/Login';
import About from '../src/Components/About';

// context
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';


/*   const mainPage = (
<Dashboard/>
  ) */

/*   const splashPage = (
<Splash/>
  ) */





function App() {
  return (
    <UserState>
      <AlertState>
      <Router>
        <div className='App'>
          <Nav/>
        <div className='container'>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/about' component={About} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/dashboard' component={Dashboard} />
          {/* <Leaderboard/> */}
          {/* <MapComponent/> */}
          
            {/* <Alerts /> */}
            {/* <Preload /> */}
            </Switch>
        </div>
    </div>
  </Router>
  </AlertState>
</UserState>
  );
}

export default App;
