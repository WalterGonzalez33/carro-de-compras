import { Component } from "react";
import Producto from "./producto"

class Productos extends Component{
    render(){
        const {agregarAlCarrito,productos}=this.props
        return(
            <div className={"flex-container"}>
                {productos.map(productos =>
                    <Producto
                    agregarAlCarro={agregarAlCarrito}
                    key={productos.name}
                    producto={productos}
                    />)}
            </div>
        )

    }
}

export default Productos