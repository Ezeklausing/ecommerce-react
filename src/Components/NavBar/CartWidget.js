import React, {useContext}  from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CartContext } from '../Context/CustomProvider';


const CartWidget = () => {


  const {quantity, total} = useContext(CartContext)


  return (
    <>
    <div>
      <p>{quantity} ${total}</p>
      <ShoppingCartCheckoutIcon color="success" sx={{ fontSize: 37 }}/>
    </div>
    
    </>
  )
}

export default CartWidget