import { Component } from "react";
import Carrito from "./carrito"

class Nav extends Component{
    render(){
      const {carro, carroVisible, mostrarCarro} = this.props
       return(
           <nav className={"nav"}>
             <div className={"cont-nav"}>
               <h1 className={"nombre-app"}>Gamer Shop</h1>
               <Carrito carro={carro} carroVisible={carroVisible} mostrarCarro={mostrarCarro}/>
             </div>
           </nav>
       ) 
    }
}

export default Nav