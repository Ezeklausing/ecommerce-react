import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import CartView from "./Components/CartView/CartView";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/UsersList/Users";
import {CustomProvider} from "./Components/Context/CustomProvider";




const App =()=>{
    const msjeBienvenida = "Usuario"
    return (
        <> 
            <CustomProvider>
                <BrowserRouter>     
                    <Users/> 
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting ={msjeBienvenida} ></ItemListContainer>} />
                        <Route path="/category/:id" element={<ItemListContainer greeting ={msjeBienvenida} ></ItemListContainer>} />
                        <Route path="/product/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart/" element={<CartView/>} />
                    </Routes>
                    <></>
                </BrowserRouter>
            </CustomProvider> 
        </>    
    )
    
};


    

export default App 
