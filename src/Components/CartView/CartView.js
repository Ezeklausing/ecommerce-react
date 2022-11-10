import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CustomProvider';
import { Link } from 'react-router-dom';
import {db} from "../../Firebase/firebase"
import {addDoc, serverTimestamp, doc, updateDoc, collection } from 'firebase/firestore';
import { Checkout } from './Checkout';
import Swal from 'sweetalert2';





const CartView = () => {

  const {cart, clear, deleteItem, total, quantity} = useContext(CartContext)
    
  const [buyer, setBuyer] = useState({})
  

  const updateStock = () => {
    cart.forEach(item => {
        const newStock = doc(db, "productos", item.id);
        updateDoc(newStock, {stock: item.stock - item.qty})
    })
}

  const finalizarCompra = ()=>{
    const cartItems = [];
        cart.forEach((item) => {
            cartItems.push({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
                quantity: quantity,
            })
        })
        




    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      buyer,
      total,
      cartItems,
      date:serverTimestamp(),
    })
    .then(result=>{
      Swal.fire({
        title: 'Muchas gracias por su compra!',
        html: `ticket de compra Nro: <b>${result.id}</b>`,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#00A19A'
    })
    })
    .catch(e => {
      console.log(e);
    });
    updateStock(cart)
    clear();
  }


    return(
      <>
      {cart.length !==0 ? (
      <>
          {cart.map((item) => (
            <h2 key={item.id}>{item.title} cantidad {item.qty}
            <button onClick={()=>deleteItem(item.id)}>Eliminar Articulo</button></h2>
          ))}
          
          <div>
            <h2>Total: </h2>
            <span>${total}</span>                  
          </div>
          <div>
            <h2>Ingresa tus datos para finalizar la compra</h2>
            <Checkout setBuyer={setBuyer}  finalizarCompra= {finalizarCompra} />
          </div>
          <div><button onClick={clear}>Reset Carrito</button></div>
        </>
        
      ) : (
        <h3>
            Tu carrito esta vacio, podes serguir comprando en la tienda <Link to="/">ACA</Link>
        </h3>
      )}
    </>
    )
  }


// eslint-disable-next-line
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default CartView