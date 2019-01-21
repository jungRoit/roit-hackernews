import React from 'react';
import Navbar from '../navbar';
import './index.css';

/**
 * Functional component for Header.
 * 
 * @param {*} props 
 */
const Header = (props) => {

  return (
    <div className='header'>
      <div className='title'>
        <h1>Roit Hackernews</h1>
      </div>
      <Navbar
        getStoryType={(type) => props.getStories(type)} />
    </div>
  )
}

export default Header;