import React, {Component} from 'react';
import Post from './Post';

class ListPost extends Component{

  state = {
    listPost : []
  }

  componentDidMount() {
          /*
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
          var miInit = {
                method: 'GET',
                headers : myHeaders,
                mode: 'no-cors',
                cache: 'default' };
          var myRequest = new Request('http://localhost:8080/articulos/32', miInit);
          */
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
