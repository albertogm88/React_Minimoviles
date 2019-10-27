import React, {Component} from 'react';
import Producto from './Producto';

class ListProductos extends Component{

  state = {
    ListProductos : []
  }

  componentDidMount() {
          fetch('http://localhost:8080/productos/')
          .then(res => res.json())
          .then((data) => {
            this.setState({ ListProductos: data })
          })
        .catch(console.log)
      }

    render(){
      return(
          <div>
            {this.state.ListProductos.map((producto) => (
              <Producto key={producto.idProducto} producto={producto} />
                ))}
          </div>
      )

    }

}

export default ListProductos;
