import React, {useEffect, useState,}  from 'react'
import ItemDetail from './ItemDetail';
import { SpinnerDiamond } from 'spinners-react';
import { useParams } from 'react-router-dom';
import { getDoc, collection, where, doc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

export const ItemDetailContainer = () => {
  
    
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams()

  useEffect (() => {
    const productCollection= collection(db, "productos")
    const refDoc= doc(productCollection, id)
    

    getDoc(refDoc)
    .then(resp=>{
        setProduct({
          ...resp.data(),
          id:resp.id
        },
        setLoading(false)
      )
    })
    .catch((error) => {
      console.log(error);
    })  
  },[id]);
  

  return (
    <div> 
      {loading ? <SpinnerDiamond size={"5%"} thickness={150} color={"#282c34"} /> : <ItemDetail  product={product} />}  
    </div>
  )
}

