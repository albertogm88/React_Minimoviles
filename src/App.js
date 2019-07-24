import React, { Component } from 'react';
import ListPost from './componentes/ListPost';
import Header from './componentes/Header';
import './bootstrap.min.css';

    class App extends Component {
      state = {
        listPost : [],
        listProduct : []

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
      return (
          <div className="container">
            <Header titulo="Minimoviles" />
            <ListPost listPost={this.state.listPost} />
          </div>
        )
    }

}

export default App;
