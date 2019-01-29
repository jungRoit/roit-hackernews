import React from 'react';
import Story from '../story';
import './index.css';

/**
 * Stateless Component to wrap all stories.
 * 
 * @param {*} props 
 */
const StoryWrapper = (props) => {

  /**
   * 
   */
  return (
    <div className='story-wrapper'>
      {props.stories.map(id =>
        <Story
          key={id}
          id={id}
        />
      )}
    </div>
  );
};


export default StoryWrapper;
