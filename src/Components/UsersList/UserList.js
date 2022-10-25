import React from 'react'

const UserList = ({list, handlerClickDelete}) => {

    

  return (
    <div>
        <ul>
            {list.map((name, i) => {
                return (
                    <li>
                        <h2 key={i}>{name}</h2>
                        <button onClick={()=>handlerClickDelete(name)}>EliminarUsuario</button>
                    </li>
                 );
            })}
        </ul>
    </div>
  )
}

export default UserList