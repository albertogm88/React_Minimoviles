import React, { Component } from 'react';

class Producto extends Component {
  
  render() {
    return (
      <div className="card" key={this.props.producto.idProducto}>
        <div className="card-body">
          <h4 className="card-title">{this.props.producto.name}</h4>
          <p className="card-text">
            {Object.entries(this.props.producto.specs).map(([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ))}
          </p>
        </div>
      </div>
    );
  }

}

export default Producto;
