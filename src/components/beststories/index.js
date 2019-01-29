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
      stories: [],
      pageNo: 1,
      itemsPerPage: 20
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

  loadMoreStories = () => {
    this.setState({ pageNo: this.state.pageNo + 1 });
  }


  /**
   * 
   */
  render() {
    return (
      this.state.isLoaded
        ? <div>
          <StoryWrapper
            key='beststories'
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

export default BestStories;
