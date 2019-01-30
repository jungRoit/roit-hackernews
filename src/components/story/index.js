import React from 'react';
import * as API from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';
import RelativeTimeConverter from '../../utils/relativeTime';



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
      story: {},
      isFetched: false
    };

  }

  /**
   * Function to call to the api to get story.
   */
  componentDidMount() {
    API.getItem(this.props.id)
      .then(res => {
        const resStory = {};

        resStory.url = res.data.url || '';
        resStory.title = res.data.title || '';
        resStory.by = res.data.by || '';
        resStory.time = res.data.time || '';
        resStory.descendants = res.data.descendants || 0;

        this.setState({ isFetched: true, story: resStory })
      })
      .catch(err => err);
  }

  /**
   * Function to Reder Story jsx.
   */
  render() {
    {
      if (!this.state.isFetched) {
        return null;
      }
    }

    return (
      <div className='story'>
        <h3><a href={this.state.story.url}>{this.state.story.title}</a></h3>
        <div className='story-details'>
          <span>By: {this.state.story.by}</span>
          <span> {RelativeTimeConverter(this.state.story.time * 1000)}</span>
          <span>
            {(this.state.story.descendants === 0) ? '0 comments' :
              <Link to={`story/${this.props.id}/comments`}>
                {this.state.story.descendants} comments
              </Link>
            }
          </span>
        </div>
      </div>
    );
  }

}

export default Story;
