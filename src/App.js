import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


const App =()=>{
    const msjeBienvenida = "Juan Perez"
    
    return (
        <>
        <Navbar />
        <ItemListContainer greeting ={msjeBienvenida} ></ItemListContainer>
        </>        
    )
    
};

export default App 
