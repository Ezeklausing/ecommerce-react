
import React from 'react'
import { useState } from 'react'
import UserList from './UserList';



const Users = () => {

    const [name, setName] = useState("");
    const [nameList,setNameList] = useState([]);
   
    const handlerChange =(event)=>{
        setName(event.target.value)
    }
    const handlerClick = ()=>{
        setNameList([...nameList,name]); 
           
    }
    const deleteName =(name)=>{
      setNameList(nameList.filter((user)=> user!==name))
    }

  return (
    <div>
        <input type="text" value={name}  onChange={handlerChange} />
        <button onClick={handlerClick}>Agregar</button>
        <UserList list ={nameList} handlerClickDelete = {deleteName} />
    </div>
  )
} 

export default Users