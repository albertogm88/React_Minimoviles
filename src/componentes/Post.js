import React, {Component} from 'react';

class Post extends Component{
  
  render(){
    return(
      <div className="card border-primary mb-3" key={this.props.post.idContent}>
        <div className="card-header">{this.props.post.name}</div>
        <div className="card-body">
          <h5 className="card-title">{this.props.post.contentDescription}</h5>
          <p className="card-text">{this.props.post.content}</p>
        </div>
      </div>
    );
  }
}

export default Post;