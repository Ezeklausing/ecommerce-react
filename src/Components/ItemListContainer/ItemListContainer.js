import React, {useEffect, useState,}  from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'
import { SpinnerDotted } from 'spinners-react';




const productList = [
  {nombre:"Guitarra Suhr 7 cuerdas", id: 0, categoria:"Guitarras", stock:6, precio: 1500, imagen:"/src/assets/Guitarra Suhr  7 cuerdas.jpg"},
  {nombre:"Guitarra Suhr", id: 1, categoria:"Guitarras", stock:2, precio: 1400, imagen:"/src/assets/Guitarra Suhr Custom Shop.jpg"},
  {nombre:"Sonor one of a kind 14x6.5", id: 2, categoria:"Guitarras", stock:4, precio: 800, imagen:"/src/assets/Redo Sonor One of a Kind  14x6.5.jpg"},
  {nombre:"Sonor vintage 14x6.5", id: 3, categoria:"Guitarras", stock:8, precio: 850, imagen:"/src/assets/Redo Sonor Vintage 14x6.5.jpg"},
  {nombre:"Yamaha Maple Custom", id: 4, categoria:"Guitarras", stock:2, precio: 2400, imagen:"/src/assets/Yamaha Maple Custom.jpg"}
]


const getProductList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productList)
  }, 2000);
})

export const ItemListContainer = ({greeting}) => {
  const onAdd = ()=>{console.log("Agregaste este item al carrito")}
    
  const [productList, setproductList] = useState([]);
  const [loading, setloading] = useState(true);
  

  useEffect(() => {
    getProductList
    .then((data) => {
      setproductList(data)
      setloading(false)
    }).catch((error) => console.log(error))
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






