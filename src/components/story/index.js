import React from 'react';
import * as API from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';



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

  }

  /**
   * Function to call to the api to get story.
   */
  componentDidMount() {
    API.getItem(this.props.id)
      .then(res => this.setState({ story: res.data }))
      .catch(err => err);
  }

  /**
   * Function to Reder Story jsx.
   */
  render() {
    return (
      <div className='story'>
        <h3><a href={this.state.story.url}>{this.state.story.title}</a></h3>
        <div className='story-details'>
          <span>By: {this.state.story.by}</span>
          <span>on : {Date(this.state.story.time).toLocaleString()}</span>
          <span>
            <Link to= {`/comments/${this.props.id}`}>
              {this.state.story.descendants} comments
            </Link>
          </span>
        </div>
      </div>
    );
  }

}

export default Story;
