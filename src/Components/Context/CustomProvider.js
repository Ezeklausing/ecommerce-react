
import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()




export const CustomProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {
    //reduce. // actualizar totales
    let cantidad = 0;
    let totalC = 0;
    cart.forEach(item =>{
      cantidad += item.cantidad;
      totalC += (item.price * item.cantidad)
    });
      setQty(cantidad)
      setTotal(totalC)
  }, [cart])
  

  const addItem = (product, cantidad)=>{
    console.log(`agrega ${cantidad} del producto ${product.title} al carrito`);
  }

  const deleteItem = (id)=>{
    setCart(cart.filter(item => item.id !== id))
  }

  

  const isInCart = (id) => cart.some(item => item.id===id)
    
  

  const clear = ()=>{
    setCart([])
    setQty(0)
    setTotal(0)
  }



  return <CartContext.Provider value={{cart,qty,total,deleteItem,clear,addItem}}>{children}</CartContext.Provider>
    
};

