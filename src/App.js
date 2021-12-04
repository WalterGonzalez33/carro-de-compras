import { Component } from "react";
import Productos from "./Componentes/productos";
import "./css/main.css"
import Layout from "./Componentes/layout"
import Section from "./Componentes/section"
import Nav from "./Componentes/nav"
import Producto from "./Componentes/producto";

class App extends Component{
  state = {
    productos:[
      {name:"GTX 1050TI", price:2000, img: "/productos/placa1050ti.png"},
      {name:"GTX 1650 SUPER", price:2500, img: "/productos/placa1650s.png"},
      {name:"RTX 3060", price:3000, img: "/productos/placa3060.png"},
      {name:"RTX 3070", price:4500, img: "/productos/placa3070.png"},
      {name:"RTX 3080", price:6000, img: "/productos/placa3080.png"},
      {name:"RTX 3090", price:9000, img: "/productos/placa3090.png"}
    ],
    carro : [

    ]
  }

  agregarAlCarro = (producto)=>{
    return(
      this.setState({
        carro : this.state.carro.concat({
          ...producto,
          cantidad:1
        })
      })
    )
  }
  render(){
    console.log(this.state.carro)

    return(
      <div>
        <Nav/>
        <Section>
        <Layout/>
        <Productos
      agregarAlCarrito={this.agregarAlCarro}
      productos={this.state.productos}
      />
        </Section>
      </div>
    )
  }
}

export default App;
