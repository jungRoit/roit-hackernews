import React from 'react';
import StoryWrapper from '../story-wrapper';
import * as API from '../../services/api.js';

/**
 * Component for best Stories.
 */
class BestStories extends React.Component {

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
   * Function to call API and get best stories.
   */
  componentDidMount() {
    API.getStoryList('beststories')
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
        key='beststories'
          stories={this.state.stories}
        /> : <h2>Loadiing...</h2>
    );
  }
}

export default BestStories;
