import React from 'react';
import StoryWrapper from '../story-wrapper';

/**
 * Component for best Stories.
 */
class BestStories extends React.Component {

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

export default BestStories;
