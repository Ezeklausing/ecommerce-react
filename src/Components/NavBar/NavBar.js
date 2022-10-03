import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import CartWidget from './CartWidget'


const Navbar = () => {

  const categorias =[
    {nombre:"Remeras", id:0, ruta:"#"},
    {nombre:"Gorras", id:1, ruta:"#"},
    {nombre:"Cds", id:2, ruta:"#"},
    {nombre:"Vinilos", id:3, ruta:"#"}
  ];

  return (
    <header>
      <img  className='logo' src={logo} alt='Logo carrito tienda'></img>
      <h1>Merchandising</h1>
      <nav>
        {
         categorias.map ((categoria)=>{
          return <a key={categoria.id} href=" {categoria.ruta} "> {categoria.nombre} </a>
         })
        }
      </nav>
      <>
      <CartWidget />
      </>
    </header>
  )
}





export default Navbar


