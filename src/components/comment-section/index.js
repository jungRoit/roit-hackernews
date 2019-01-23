import React from 'react';
import Comment from '../comment';
import * as API from '../../services/api';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: []
    }
  }

  componentDidMount() {
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ kids: res.data.kids }))
      .catch(err => err);
  }


  render() {
    return (
      <div>
        {this.state.kids.map(id =>
           <Comment
           key = {id}
           id = {id}
            />
          )}
      </div>
    )
  }
  
}
export default CommentSection;