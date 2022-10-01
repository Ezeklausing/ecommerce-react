import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Navbar = () => {
  return (
    <header>
      <img  className='logo' src={logo} alt='Logo carrito tienda'></img>
      <h1>Merchandising</h1>
      <nav>
        <a href=''>Remeras</a>
        <a href=''>Cds</a>
        <a href=''>Gorras</a>
      </nav>
      <ShoppingCartCheckoutIcon color="success" sx={{ fontSize: 37 }}/>
    </header>
  )
}

export default Navbar
