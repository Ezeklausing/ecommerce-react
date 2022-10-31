import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()




export const CustomProvider = ({children}) => {



  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {

    //puede ser que no funcione porque tiene quantity //qty. 
      setQuantity(cart.reduce((total,item)=> total + item.quantity, 0))
      setTotal(cart.reduce((total, item)=> total + (item.quantity * item.price),0))
      
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
    setQuantity(quantity + qty);
    setTotal(total + (item.price * qty));
  };
    

  const deleteItem = (id)=>{
    const found = cart.find(element => element.id === id);
    setCart(cart.filter((item) => item.id !== id));
    setQuantity( quantity - found.qty)
    setTotal(total - (found.price * found.qty))
  };
 

  const isInCart = (id) => cart.some(item => item.id===id)
    

  const clear = ()=>{
    setCart([])
    setQuantity(0)
    setTotal(0)
  }



  return <CartContext.Provider value={{cart,quantity,total,deleteItem,clear,addItem,}}>{children}</CartContext.Provider>
}   

