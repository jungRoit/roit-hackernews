import React from 'react';
import StoryWrapper from '../story-wrapper';

/**
 * Component for top Stories.
 */
class TopStories extends React.Component {

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

export default TopStories;
