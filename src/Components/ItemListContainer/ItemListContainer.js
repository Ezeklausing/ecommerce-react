import React from 'react'
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    return (
        <h2 style={{color:"grey", marginLeft: 10 }}>Bienvenido, {greeting} </h2>
  )
}

export default ItemListContainer