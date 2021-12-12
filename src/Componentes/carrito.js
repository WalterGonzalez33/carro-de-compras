import { Component } from "react";
import BubbleAlert from "./bubbleAlert"
import ResumenCarrito from "./resumenCarrito"

class Carrito extends Component{
    render(){
        const {carro, mostrarCarro, carroVisible} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <div>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad}/>
                : null}
                </div>
                <div onClick={mostrarCarro} className={"carrito"}>
                <i className={"fas fa-cart-plus i"}></i>
                </div>
                {carroVisible ? <ResumenCarrito carro = {carro} /> : null}
            </div>
        )
    }
}

export default Carrito