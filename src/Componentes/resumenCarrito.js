import { Component } from "react";

class ResumenCarrito extends Component{
    render(){
        const {carro} = this.props
        return(
            <div className={"resumenCarrito"}>
                <div className={"flecha"}></div>
                <ul>
                    {carro.map(x => <li key={x.name}>
                        <img className={"fProductoCarrito"} alt={x.name} src={x.img}></img>
                        <span className={"nProductoCarrito"}>{x.name}</span>
                        <div className={"cProductoCarrito"}>
                            <span>{x.cantidad}</span>
                        </div>
                         </li>)}
                </ul>
            </div>
        )
    }
}

export default ResumenCarrito