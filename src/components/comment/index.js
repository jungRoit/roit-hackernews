import React from 'react';

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
    this.state = {};

  }

  /**
   * Function to call API to get comment Data.
   */
  componentDidMount() {

  }

  /**
   * Function to render JSX.
   */
  render() {
    return (
      <div>
        <p>
          this is a comment.
        </p>
        <div>
          <span>By:</span>
          <span>on: </span>
          <span>Replies: </span>
        </div>
      </div>
    );
  }
}

export default Comment;


