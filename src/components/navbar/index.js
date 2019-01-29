import React from 'react';
import './index.css';

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
  )
}

export default Navbar;