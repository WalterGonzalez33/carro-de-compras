import { Component } from "react";
import Carrito from "./carrito"

class Nav extends Component{
    render(){
       return(
           <nav className={"nav"}>
             <div className={"cont-nav"}>
               <h1 className={"nombre-app"}>Gamer Shop</h1>
               <Carrito/>
             </div>
           </nav>
       ) 
    }
}

export default Nav