import React from 'react';
import StoryWrapper from '../story-wrapper';
import * as API from '../../services/api.js';

/**
 * Component for New Stories.
 */
class NewStories extends React.Component {

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
   * Function to call API and get new stories.
   */
  componentDidMount() {
    API.getStoryList('newstories')
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
        key= 'newstories'
          stories={this.state.stories.slice(0,9)}
        /> : <h2>Loadiing...</h2>

    );
  }
}

export default NewStories;
