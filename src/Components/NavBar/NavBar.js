import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom"


const Navbar = () => {

  const categorias =[
    {nombre:"electronics", id:0, ruta:"/category/electronics"},
    {nombre:"jewelery", id:1, ruta:"/category/jewelery"},
    {nombre:"men's clothing", id:2, ruta:"/category/men's clothing"},
    {nombre:"women's clothing", id:3, ruta:"/category/women's clothing"}
  ];


  return (
    <header style={styles.container}> 
      <Link  to="/">
        <img style={styles.imgLogo} className='logo' src={logo} alt='Logo carrito tienda'></img>
      </Link>
      <h1>Ecommerce </h1>
      <nav>
        {
         categorias.map ((categoria)=>{
          return <NavLink  style={styles.category} key={categoria.id} to={categoria.ruta}> {categoria.nombre} </NavLink>
         })
        }
      </nav>
      <>
        <Link to="/cart" >
          <CartWidget />
        </Link>
      </>
    </header>
  )
}

const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

export const styles = {
    container: {
      display: viewport.width > 900 ? "flex" : "none",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFD369",
      height: "5.5rem",
      width: "100%",
    },
    imgLogo: {
      width: "20%",
      height: "50%",
    },
    category: {
      textDecoration: "none",
      backgroundColor:"#fff",
      border: "1px solid #000",
      borderRadius: 2,
      color: "#000",
      margin: 15,
      padding: "4px 12px",
      transition: "all 0.3s",
      position: "relative",
      overflow: "hidden",
    }, 
  };

export default Navbar


