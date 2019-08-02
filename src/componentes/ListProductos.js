import React, {Component} from 'react';
import Producto from './Producto';

class ListProductos extends Component{

  state = {
    ListProductos : []
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
