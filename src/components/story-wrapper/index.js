import React from 'react';
import Story from '../story';
import './index.css';
import * as API from '../../services/api';

/**
 * Stateless Component to wrap all stories.
 * 
 */
class StoryWrapper extends React.Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      pageNo: 1,
      itemsPerPage: 20,
      isLoaded: false
    }
  }

  /**
   * Function to get stories.
   */
  componentDidMount() {
    API.getStoryList(this.props.storyType)
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
      <div className='story-wrapper'>
        <div>
          {this.state.stories.slice(
            0,
            this.state.pageNo * this.state.itemsPerPage)
            .map(id =>
              <Story
                key={id}
                id={id}
              />
            )}
          <div
            className='pagination'
            onClick={this.loadMoreStories}
          >
            <p>Load More Stories</p>
          </div>
        </div>

        }

      </div>
    );
  }

}


export default StoryWrapper;
