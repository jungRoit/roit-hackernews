import React from 'react';
import StoryWrapper from '../story-wrapper';
import * as API from '../../services/api.js';
import './index.css';

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
      stories: [],
      pageNo: 1,
      itemsPerPage: 20
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

  loadMoreStories = () => {
    this.setState({ pageNo: this.state.pageNo + 1 });
  }

  /**
   * Function to render jsx.
   */
  render() {
    return (
      this.state.isLoaded
        ? <div>
          <StoryWrapper
            key='newstories'
            stories={this.state.stories.slice(
              0,
              this.state.pageNo * this.state.itemsPerPage)}
          />
          <div
            className='pagination'
            onClick={this.loadMoreStories}
          >
            <p>Load More</p>
          </div>
        </div>
        : <h2>Loadiing...</h2>

    );
  }
}

export default NewStories;
