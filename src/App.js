import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer";




const App =()=>{
    const msjeBienvenida = "Usuario"
    const seccionProducto ="Producto"
    
    return (
        <>
        <Navbar />
        <ItemListContainer greeting ={msjeBienvenida} ></ItemListContainer>
        <></>
        <ItemDetailContainer />
        </>        
    )
    
};

export default App 
