import React from 'react';

const Post = ({post}) => {
  return(
      <div>
        <center><h1>Post List</h1></center>

            <div className="card">
              <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>

      </div>
  )
};

export default Post;
