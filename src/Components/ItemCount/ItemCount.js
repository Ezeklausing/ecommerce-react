import React, {useState} from 'react'
import Swal from 'sweetalert2';

 const ItemCount = ({stock, initial,onAdd}) => {


    const [cantidad, setCantidad] = useState(initial);

    
    const handlerClickSumar =()=>{
        if(cantidad < stock){
            setCantidad(cantidad +1)
              }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Actualmente no tenemos stock del articulo.',
                    text: 'Sin stock. Te avisaremos cuando haya nuevamente.',
                    })
        }
    }
    const handlerClickRestar =()=>{
        if (cantidad > 1){
            setCantidad(cantidad -1)
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
        setCantidad(initial);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregaste tus articulos al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        onAdd()
    }
  return (
    <div>
        <h2>Cantidad {cantidad}</h2>
        <button onClick={handlerClickSumar}>+</button>
        <button onClick={handlerClickRestar}>-</button>
        <button onClick={handlerClickAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
