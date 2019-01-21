import React from 'react';
import StoryWrapper from '../story-wrapper';

/**
 * Component for New Stories.
 */
class NewStories extends React.Component {

  /**
   * 
   */
  render() {
    return (
      <StoryWrapper 
        stories = {this.props.stories}
      />
    );
  }
}

export default NewStories;
