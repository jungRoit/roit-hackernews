import React from 'react';
import * as API from '../../services/api';
import './index.css';

/**
 * Component to show comments.
 */
class Comment extends React.Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      comment: {}
    };
  }

  toggleReplies = () => {
    console.log('replies');
  }

  /**
   * Function to call API to get comment Data.
   */
  componentDidMount() {
    API.getItem(this.props.id)
      .then(res => this.setState({ comment: res.data }))
      .catch(err => err);
  }

  /**
   * Function to render JSX.
   */
  render() {
    return (
      <div className='comment clearfix'>
        <h4>By: {this.state.comment.by}</h4>
        <p dangerouslySetInnerHTML={{ __html: this.state.comment.text }}>
        </p>
        <div className='comment-details'>
          <span>on: {this.state.comment.time}</span>
          <span className="reply" onClick = {this.toggleReplies}>
              {(this.state.comment.kids !== undefined)
                ? Object.keys(this.state.comment.kids).length : 0} Replies
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;


