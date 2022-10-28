import React, {useContext}  from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CartContext } from '../Context/CustomProvider';


const CartWidget = () => {


  const {qty} = useContext(CartContext)


  return (
    <>
    <p> {qty} </p>
    <ShoppingCartCheckoutIcon color="success" sx={{ fontSize: 37 }}/>
    </>
  )
}

export default CartWidget