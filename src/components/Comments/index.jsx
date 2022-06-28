import React from 'react'

//components
import Comment from '../Comment'

const Comments = ({ comments, isCommentPage, isCaption, description }) => {
  return (
    comments.map((comment, index) =>
      <Comment
        comment={comment}
        key={index}
        isCommentPage={isCommentPage}
        isCaption={isCaption || false}
      />
    ))
}

export default Comments
