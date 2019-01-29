import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


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
          <NavLink to='/newstories'>New Stories</NavLink>
        </li>
        <li
          className='nav-item'
          title='topstories'>
          <NavLink to='/topstories'>Top Stories</NavLink>
        </li>
        <li
          className='nav-item'
          title='beststories'>
          <NavLink to='/beststories'>Best Stories</NavLink>
        </li>
      </ul>
    </div>

  )
}

export default Navbar;