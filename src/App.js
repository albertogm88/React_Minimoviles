import React, { Component } from 'react';
import ListPost from './componentes/ListPost';
import ListProductos from './componentes/ListProductos';
import Header from './componentes/Header';
import './bootstrap.min.css';
import './index.css';

class App extends Component {

    render(){
      return (
          <div className="container">
            <Header titulo="Minimoviles" />
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <ListPost />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <ListProductos />
              </div>
            </div>
          </div>
        )
    }

}

export default App;
