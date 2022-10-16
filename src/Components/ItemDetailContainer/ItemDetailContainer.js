import React, {useEffect, useState,}  from 'react'
import ItemDetail from './ItemDetail';
import { SpinnerDotted } from 'spinners-react';


export const ItemDetailContainer = () => {
  
    
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  

  useEffect (() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(data=>data.json())
            .then((json)=>{
              setProduct(json)
              setloading(false)
              console.log(product)
            })
            .catch((e)=>console.log(e))
            .finally()
  },[]);


  return (
    <div> 
      {loading ? <SpinnerDotted size={"5%"} color={'#282c34'} /> : <ItemDetail  product={product} />}  
    </div>
  )
}

