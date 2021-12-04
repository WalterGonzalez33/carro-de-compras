import { Component } from "react";

class Button extends Component{
    render(){
        return(
            <button className={"button-producto"} {...this.props}/>
        )
    }
}

export default Button