import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


/**
 * Functional component for Navbar.
 * 
 * @param {*} props 
 */
const Navbar = (props) => {

  return (

    <div className='navbar'>
      <ul>
        <li
          className='nav-item'
          title='newstories'>
          <Link to='/newstories'>New Stories</Link>
        </li>
        <li
          className='nav-item'
          title='topstories'>
          <Link to='/topstories'>Top Stories</Link>
        </li>
        <li
          className='nav-item'
          title='beststories'>
          <Link to='/beststories'>Best Stories</Link>
        </li>
      </ul>
    </div>

  )
}

export default Navbar;