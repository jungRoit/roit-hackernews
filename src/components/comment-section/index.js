import React from 'react';
import Comment from '../comment';
import * as API from '../../services/api';

/**
 * Component to wrap all comments of a story.
 * 
 */
class CommentSection extends React.Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      kids: []
    };
  }

  /**
   * Function to get comments from API through url param id.
   */
  componentDidMount() {
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ kids: res.data.kids }))
      .catch(err => err);
  }


  /**
   * Function to render jsx for comments.
   */
  render() {
    return (
      <div>
        {(this.state.kids !== undefined) ?
          this.state.kids.map(id =>
            <Comment
              key={id}
              id={id}
            />
          )
          : <h1>No Comments Yet</h1>
        }
      </div>
    )
  }

}
export default CommentSection;