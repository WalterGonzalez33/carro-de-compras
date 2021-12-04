import { Component } from "react";
import Button from "./button"

class Producto extends Component{
    render(){
        const { producto, agregarAlCarro} = this.props
        console.log(this.props);
        return(
            <div className={"tarjet-producto"}>
                <img className={"img-producto"} alt={producto.name} src={producto.img}/>
                <h3 className={"name-producto"} >{producto.name}</h3>
                <p className={"price-producto"}> {producto.price}</p>
                <Button onClick={() =>agregarAlCarro(producto)}>
                    Agregar
                </Button>
            </div>
        )
    }
}

export default Producto