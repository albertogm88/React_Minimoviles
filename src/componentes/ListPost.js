import React from 'react';

const ListPost = ({listPost}) => {
  return(
      <div>
        {listPost.map((post) => (
            <div className="card" key={post.idContent}>
              <div className="card-body">
                  <a href="{listPost.permalink}"><h5 className="card-title">{post.name}</h5></a>
                  <h6 className="card-subtitle mb-2 text-muted">{post.contentDescription}</h6>
                </div>
              </div>
            ))}
      </div>
  )
};

export default ListPost;
