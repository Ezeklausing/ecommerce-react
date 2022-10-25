import React, {useEffect, useState,}  from 'react'
import ItemDetail from './ItemDetail';
import { SpinnerDiamond } from 'spinners-react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  
    
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);

  const {id} = useParams()
  
  const URL_ITEM= `https://fakestoreapi.com/products/${id}`
  

  useEffect (() => {
    fetch(URL_ITEM)
            .then(data=>data.json())
            .then((json)=>{
              setProduct(json)
              setloading(false)
            })
            .catch((e)=>console.log(e))
            .finally()
  },[URL_ITEM, id]);


  return (
    <div> 
      {loading ? <SpinnerDiamond size={"5%"} thickness={150} color={"#282c34"} /> : <ItemDetail  product={product} />}  
    </div>
  )
}

