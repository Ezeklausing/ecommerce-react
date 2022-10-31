import React, {useState} from 'react'
import { Button } from '@mui/material';

import Swal from 'sweetalert2';



 const ItemCount = ({stock, initial, onAdd}) => {

    
    const [quantity, setQuantity] = useState(initial);


    const handlerClickSumar =()=>{
        if(quantity < stock){
            setQuantity(quantity +1)
              }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...no hay stock del articulo para la cantidad que seleccionaste.',
                    text: 'Te avisaremos cuando haya nuevamente.',
                    })
        }
    }
    const handlerClickRestar =()=>{
        if (quantity > 1){
            setQuantity(quantity -1)
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...La cantidad minima es 1',
                text: 'Agrega mas items al carrito',
              }) 
        }
        
    }
    const handlerClickAgregar =()=>{
        onAdd(quantity);
        setQuantity(initial);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregaste tus articulos al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        
    }

  return (
      <>
        <Button size="small" variant="outlined" onClick={handlerClickSumar}>+</Button>
        <h4>{quantity}</h4>
        <Button size="small" variant="outlined" onClick={handlerClickRestar}>-</Button>
        <Button size="small" variant="outlined" color="success" onClick={handlerClickAgregar}>Agregar al Carrito</Button>
      </>
  )
}


export default ItemCount
