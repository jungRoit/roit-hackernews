import React from 'react';
import Navbar from '../navbar';
import './index.css';
import withRouter from 'react-router-dom';


/**
 * Functional component for Header.
 * 
 * @param {*} props 
 */
const Header = (props) => {
  let user;

  if (localStorage.getItem('user') !== null) {
    user = JSON.parse(localStorage.getItem('user'));
  }

  

  /**
   * Function to logout.
   */
  const logout = () => {
    localStorage.clear();
    props.history.push('/login');
  };

  return (
    <div className='header'>
      <div className='title'>
        <h1>Roit Hackernews</h1>
      </div>
      {user !== null
        ? <div className='user-details'>
          <i
            onClick = {() => logout()} 
            className="fas fa-2x fa-sign-out-alt"></i>
            
        </div>
        : <div className='user-details'></div>
      }
      <Navbar
        getStoryType={(type) => props.getStories(type)} />
    </div>
  )
}

export default Header;
