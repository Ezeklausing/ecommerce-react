import React from 'react'

const Item = ({product}) => {
  return (
    <div>
      <h4 key={product.id}>{product.nombre}</h4>
    </div>
  )
}

export default Item
