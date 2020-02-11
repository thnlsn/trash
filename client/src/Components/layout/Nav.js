import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

function Nav(props) {

    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, user } = userContext;

    const onLogout = () => {
        logout();
    };

    const authLinks = (
    <Fragment>
        <div className="nav-item2">
        <h2>Hi, {user.name}</h2>
          <div className="nav-link">
            <Link to="/leaderboard">
            Leaderboard
           </Link>
          </div>
          <div className="nav-link">
            <Link to="/map" className="nav-link">
            Map
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/about" className="nav-link">
            About
            </Link>
          </div>
        </div> 
        <div className="nav-item3">
        <div className="nav-link">
            <Link to="/about" className="nav-link">
            Logout
            </Link>
          </div>
        </div>
    </Fragment>
    )


    const guestLinks = (
        <Fragment>
          <div className="nav-item2">
            <div className="nav-link">
              <Link to="/leaderboard" className="title-link">
                Leaderboard
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/about" className="title-link">
                About
              </Link>
            </div>
          </div>
        <div className="nav-item3">
          <div className="nav-link">
            <Link to="/login" className="nav-link">
            Login
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/register" className="nav-link">
            Register
            </Link>
          </div>
        </div>
        </Fragment>
      );
      
    //   const navStyle = {
    //     color: '#424659'
    // };


      return (
        <nav className='nav-grid-container'>
            <div className="nav-item1">
            <Link to='/' className='title-link'>
                    <span className='title'>PIXIT</span>
            </Link>
            </div>
                
                {isAuthenticated ? authLinks : guestLinks}
                
        </nav>
    );
}

export default Nav;
