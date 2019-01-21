import React from 'react';
import * as API from '../../services/api';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Comment from '../comment';


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
      <Router>
        <div className='story'>
          <h3>{this.state.story.title}</h3>
          <div className='story-details'>
            <span>By: {this.state.story.by}</span>
            <span>on : { Date(this.state.story.time).toLocaleString()}</span>
            <span>
              <Link to={`/comments/${this.props.id}`}>
                {this.state.story.descendants} comments
              </Link>
            </span>
          </div>
        </div>
        <Route path={`/comments/${this.props.id}`} exact component={Comment} />
      </Router>
    );
  }

}

export default Story;
