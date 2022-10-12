import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {ItemCount} from "./Components/ItemCount/ItemCount";


const App =()=>{
    const msjeBienvenida = "Juan Perez"

    const onAdd = ()=>{
        console.log("Agregaste este item al carrito")
    }
    
    return (
        <>
        <Navbar />
        <ItemListContainer greeting ={msjeBienvenida} ></ItemListContainer>
        <ItemCount stock={10} initial = {1} onAdd= {onAdd}  />
        </>        
    )
    
};

export default App 
