import React, {useContext}  from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CartContext } from '../Context/CustomProvider';


const CartWidget = () => {


  const {quantity} = useContext(CartContext)


  return (
    <>
    <p> {quantity} </p>
    <ShoppingCartCheckoutIcon color="success" sx={{ fontSize: 37 }}/>
    </>
  )
}

export default CartWidget