import React from 'react';
import * as API from '../../services/api';

/**
 * Story component for individual Story.
 * 
 */
class Story extends React.Component {

  /**
   * Constructor for Story class.
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      story: {}
    };
    this.getStory();
  }

  /**
   * Function to get Story data from the hackernews api.
   */
  getStory = () => {
    API.getItem(this.props.id)
      .then(res => this.setState({ story: res.data }))
      .catch(err => err);
  }

  /**
   * Function to Reder Story jsx.
   */
  render() {
    return (
      <div>
        <h3>{this.state.story.title}</h3>
      </div>
    );
  }

}

export default Story;
