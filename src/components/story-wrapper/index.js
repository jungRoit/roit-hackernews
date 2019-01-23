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
      {(props.stories.length !== 0) ?
        props.stories.map(id =>
          <Story
            key={id}
            id={id}
          />
        )
        : <div>
          <h1>No Stories</h1>
        </div>
      }


    </div>
  );
};


export default StoryWrapper;
