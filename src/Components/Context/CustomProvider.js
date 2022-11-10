import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()


export const CustomProvider = ({children}) => {


  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {

      setQuantity(cart.reduce((total,item)=> total + item.qty, 0))
      setTotal(cart.reduce((total, item)=> total + (item.qty * item.price),0))
      
  }, [cart])
  

  const addItem = (item, qty)=>{
    if (isInCart(item.id)) {
      const elementMod = cart.map((product) => {
        if (product.id === item.id) {
          product.qty += qty;
        }
        return product;
      });
      setCart(elementMod);
    } else {
      setCart([...cart, { ...item, qty }]);
    }
  };
    

  const deleteItem = (id)=>{
    setCart(cart.filter((item) => item.id !== id));
  };


  const isInCart = (id) => cart.some(item => item.id===id)
    

  const clear = ()=>{
    setCart([])
    setQuantity(0)
    setTotal(0)
  }



  return <CartContext.Provider value={{cart,quantity,total,deleteItem,clear,addItem,}}>{children}</CartContext.Provider>
}   

