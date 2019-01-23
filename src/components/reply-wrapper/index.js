import React from 'react';
import Comment from '../comment';

/**
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