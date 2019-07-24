import React from 'react';

import img from '../../public/images/profile.jpeg'

function PostHeader({}) {
  return (
    <div className="postHeaderTop">
      <img src={img} alt="avatar"/>
        <div className="textheader">
          <span>Júlio Alcantara</span>
          <span>04 Jun 2019</span>
        </div>
    </div>
  )
}

function PostComent({}) {
  return (
    <div className="post-comment">
      <div className="divider" />
      <div className="comment">
        <img src={img} alt="Avatar"/>
        <p>
          <span>Alisson Macedo</span>
        Olá Fulando, a RocketSeat esta sim.</p>
      </div>
    </div>
  )
}


function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader />
      <p className="header-content">Pessoal alguém sabe se a RocketSeat está contratando?</p>
      <PostComent />
    </div>
    
  );
}

export default PostItem;