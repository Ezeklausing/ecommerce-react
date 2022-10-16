import React, {useEffect, useState,}  from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'
import { SpinnerDotted } from 'spinners-react';


export const ItemListContainer = ({greeting}) => {
  const onAdd = ()=>{console.log("Agregaste este item al carrito")}
    
  const [productList, setproductList] = useState([]);
  const [loading, setloading] = useState(true);
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(data=>data.json())
            .then((json)=>{
              setproductList(json)
              setloading(false)
            })
            .catch((e)=>console.log(e))
            .finally()
  },[]);
  
  return (
      <div>
        
        <h2 style={{color:"grey", marginLeft: 10 }}>Bienvenido, {greeting}</h2>
        <></>
        <ItemCount stock={10} initial = {1} onAdd= {onAdd}/>
        {loading ? <SpinnerDotted size={"5%"} color={'#282c34'} /> : <ItemList  products= {productList} />}  
      </div>
      )
}






