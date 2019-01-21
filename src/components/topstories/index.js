import React from 'react';
import StoryWrapper from '../story-wrapper';
import * as API from '../../services/api.js';

/**
 * Component for top Stories.
 */
class TopStories extends React.Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      stories: []
    };
  }

  /**
   * Function to call API and get top stories.
   */
  componentDidMount() {
    API.getStoryList('topstories')
      .then(res => this.setState({ isLoaded: true, stories: res.data }))
      .catch(err => err);
  }


  /**
   * 
   */
  render() {
    return (
      this.state.isLoaded
        ? <StoryWrapper
          key='topstories'
          stories={this.state.stories}
        /> : <h2>Loadiing...</h2>

    );
  }
}

export default TopStories;
