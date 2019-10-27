import React, {Component} from 'react';
import Post from './Post';

class ListPost extends Component{

  state = {
    listPost : []
  }

  componentDidMount() {
          fetch('http://localhost:8080/articulos/')
          .then(res => res.json())
          .then((data) => {
            this.setState({ listPost: data })
          })
        .catch(console.log)
      }

    render(){
      return(

        <div className="row">
            {this.state.listPost.map((post) => (
              <Post key={post.idContent} post={post} />
                ))}
          </div>
      );

    }

}

export default ListPost;
