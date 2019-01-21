import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/**
 * Functional component for Navbar.
 * 
 * @param {*} props 
 */
const Navbar = (props) => {
  /**
   * Function to send storyType data to parent.
   * 
   * @param {object} event
   */
  const getStoryType = (event) => {
    props.getStoryType(event.target.title);
  }

  return (
    <Router>
      <div className='navbar'>
        <ul>
          <li
            className='nav-item'
            onClick={(event) => getStoryType(event)}
            title='newstories'>
            New Stories
          </li>
          <li
            className='nav-item'
            onClick={(event) => getStoryType(event)}
            title='topstories'>
            Top Stories
          </li>
          <li
            className='nav-item'
            onClick={(event) => getStoryType(event)}
            title='beststories'>
            Best Stories
          </li>
        </ul>
      </div>
    </Router>
  )
}

export default Navbar;