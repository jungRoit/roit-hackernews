import React from 'react';
import Navbar from '../navbar';
import './index.css';

/**
 * Functional component for Header.
 * 
 * @param {*} props 
 */
const Header = (props) => {

  /**
   * Function to send storyType to App.js.
   * 
   * @param {string} type 
   */
  const sendStoryTypeToApp = (type) => {
    props.getStories(type);
  }

  return (
    <div className='header'>
      <div className='title'>
        <h1>Roit Hackernews</h1>
      </div>
      <Navbar
        getStoryType={(type) => sendStoryTypeToApp(type)} />
    </div>
  )
}

export default Header;