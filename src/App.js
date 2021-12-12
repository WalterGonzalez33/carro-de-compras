import { Component } from "react";
import Productos from "./Componentes/productos";
import "./css/main.css"
import Layout from "./Componentes/layout"
import Section from "./Componentes/section"
import Nav from "./Componentes/nav"

class App extends Component{
  state = {
    productos:[
      {name:"GTX 1050TI", price:2000, img: "/productos/placa1050ti.png"},
      {name:"GTX 1650 SUPER", price:2500, img: "/productos/placa1650s.png"},
      {name:"RTX 3060", price:3000, img: "/productos/placa3060.png"},
      {name:"RTX 3070", price:4500, img: "/productos/placa3070.png"},
      {name:"RTX 3080", price:6000, img: "/productos/placa3080.png"},
      {name:"RTX 3090", price:9000, img: "/productos/placa3090.png"},
      {name:"RX 5700XT", price:5000, img: "/productos/placa5700XT.png"},
      {name:"RX 6600XT", price:8000, img: "/productos/placaRX6600XT.png"},
      {name:"RX 6900XT", price:11000, img: "/productos/placaRX6900XT.png"}
    ],
    carro : [


    ],
    carroVisible:false

  }

  agregarAlCarro = (producto)=>{
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ?({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)
        return this.setState({carro: newCarro})
      
    }
    return(
      this.setState({
        carro : this.state.carro.concat({
          ...producto,
          cantidad:1
        })
      })
    )
  }

  mostrarCarro = ()=>{
    if(!this.state.carro.length){
      return
    }
    this.setState({carroVisible: !this.state.carroVisible})

  }
  render(){
    const { carroVisible } = this.state

    return(
      <div>
        <Nav carro ={this.state.carro} carroVisible={carroVisible} mostrarCarro={this.mostrarCarro}/>
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
