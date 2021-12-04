import { Component } from "react";
import BubbleAlert from "./bubbleAlert"

class Carrito extends Component{
    render(){
        return(
            <div>
                <div className={"burbujaNotificasion"}>
                    <BubbleAlert value={11}/>
                </div>
                <div className={"carrito"}>
                <i className={"fas fa-cart-plus i"}></i>
                </div>
            </div>
        )
    }
}

export default Carrito