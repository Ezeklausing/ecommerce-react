import React from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'



export const ItemListContainer = ({greeting}) => {
  const onAdd = ()=>{
    console.log("Agregaste este item al carrito")
  }

    return (
      <div>
        <h2 style={{color:"grey", marginLeft: 10 }}>Bienvenido, {greeting}</h2>
        <></>
        <ItemCount stock={10} initial = {1} onAdd= {onAdd}/>
      </div>
  )
}




