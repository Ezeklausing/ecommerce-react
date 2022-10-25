import React, {useEffect, useState,}  from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList'
import { SpinnerDotted } from 'spinners-react';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({greeting}) => {
      
  const [productList, setproductList] = useState([]);
  const [loading, setloading] = useState(true);
  

  const {id} = useParams();
  
  
  const URL_BASE = 'https://fakestoreapi.com/products/'
  const URL_CAT = `${URL_BASE}/category/${id} `


  useEffect(() => {
    fetch(id? URL_CAT : URL_BASE)
            .then(data=>data.json())
            .then((json)=>{
              setproductList(json)
              setloading(false)
            })
            .catch((e)=>console.log(e))
            .finally()
            
  },[URL_CAT, id]);
  
  return (
      <div>
        
        <h2 style={{color:"grey", marginLeft: 10 }}>Bienvenido, {greeting}</h2>
        <></>
        {loading ? <SpinnerDotted size={"5%"} color={'#282c34'} /> : <ItemList  products= {productList} />}  
      </div>
      )
}






