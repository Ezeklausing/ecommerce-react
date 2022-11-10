import React, {useEffect, useState,}  from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList'
import { SpinnerDotted } from 'spinners-react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

export const ItemListContainer = ({greeting}) => {
      
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  
 
  const {id} = useParams();

  const listProducts = collection(db, "productos") 
  const cat = id? query(listProducts, where(`category`, `==`,id )): listProducts;


  useEffect(() => {
    getDocs(cat)
    .then((resp)=>{
      const products = resp.docs.map(item=>{
        return {
          ...item.data(),
          id: item.id
        }
      })
      setproductList(products);
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
      })
  },[id])
  
  return (
      <div>
        
        <h2 style={{color:"grey", marginLeft: 10 }}>Bienvenido, {greeting}</h2>
        <></>
        {
        loading ? <div><SpinnerDotted size={"5%"} color={'#282c34'} /></div> : <ItemList  products= {productList} />}  
      </div>
      )
}



