import React from 'react';
import Comment from '../comment';

/**
 * Stateless component to render comment replies.
 * 
 * @param {*} props 
 */
const ReplyWrapper = (props) => {

  /**
   * 
   */
  return (
    <div>
      {Object.values(props.kids).map(id =>
        <Comment
          key={id}
          id={id}
        />
      )}
    </div>
  )
}

export default ReplyWrapper;