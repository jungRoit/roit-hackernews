import React from 'react';
import Navbar from '../navbar';
import './index.css';


/**
 * Component for Header.
 * 
 */
const Header = (props) => {
  /**
   * Function to logout.
   */
  const logout = () => {
    localStorage.clear();
    props.history.push('/newstories');
  };

  return (
    <div className='header'>
      <div className='title'>
        <h1>Roit Hackernews</h1>
      </div>
      {localStorage.getItem('user') !== null
        ? <div className='user-details'>
          <i
            onClick={() => logout()}
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
