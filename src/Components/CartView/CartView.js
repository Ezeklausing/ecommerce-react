import React, { useContext } from 'react'
import { CartContext } from '../Context/CustomProvider';
import { Link } from 'react-router-dom';
import {db} from "../../Firebase/firebase"
import { CollectionReference, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';




const CartView = () => {

  const {cart, clear, deleteItem} = useContext(CartContext)
    


    return(
      <>
      {cart.length === 0 ? (
        
          <h1>
            No agregaste ningun producto <Link to="/">ACA</Link>
          </h1>
          
      ) : (
        <>
          {cart.map((item) => (
            <h1 key={item.id}>{item.title} cantidad {item.qty}<button onClick={()=>deleteItem(item.id)}>Eliminar Articulo</button></h1>
            
          ))}
          <button onClick={clear}>Reset Carrito</button>
        </>
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