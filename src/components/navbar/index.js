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
        <NavLink to='/newstories'>
          <li
            className='nav-item'
            title='newstories'>
            New Storiess
          </li>
        </NavLink>
        <NavLink to='/topstories'>
          <li
            className='nav-item'
            title='topstories'>
            Top Stories
          </li>
        </NavLink>
        <NavLink to='/beststories'>
          <li
            className='nav-item'
            title='beststories'>
            Best Stories
          </li>
        </NavLink>
      </ul>
    </div>

  )
}

export default Navbar;