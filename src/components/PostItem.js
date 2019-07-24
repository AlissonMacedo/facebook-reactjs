import React from 'react';

import img from '../../public/images/profile.jpeg'

function PostHeader({ author, date}) {
  return (
    <div className="postHeaderTop">
      <img src={author.avatar} alt="avatar"/>
        <div className="textheader">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
    </div>
  )
}

function PostComent({ comments }) {
  return (
    <div className="post-comment">
      <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} alt="Avatar"/>
        <p>
          <span>{comment.author.name}</span>
            {comment.content}
        </p>
          </div>
        ))}
    </div>
  )
}


function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="header-content">{content}</p>
      <PostComent comments={comments}/>
    </div>
    
  );
}

export default PostItem;