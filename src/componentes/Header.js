import React, { Component } from 'react';

class Header extends Component{
  state = {
    ListOpciones : []
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
          fetch('http://localhost:8080/menu/14')
          .then(res => res.json())
          .then((data) => {
            this.setState({ ListOpciones: data })
          })
        .catch(console.log)
      }

    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Minimoviles</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              {this.state.ListOpciones.map((opcion) => (
                <li className="nav-item">
                  <a className="nav-link" href="#">{opcion.name}</a>
                </li>
              ))}
            </ul>
            
          </div>
          </nav>
      )
    }
  }

export default Header;
