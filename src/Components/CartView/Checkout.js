
import React,{useState} from 'react'


export const Checkout = ({setBuyer, finalizarCompra, clear}) => {
    
    const [formValues, setformValues] = useState({
        name:"",
        lastname:"",
        email:"",
    })

    const handlerChange = (event) => {
        setformValues({...formValues, [event.target.name] : event.target.value,})  

        setBuyer({
            ...formValues,
        });
    }
    

  return (
    <>
    <form onSubmit={finalizarCompra}>
            <div >
                <label> Nombre:</label>
                <input name="name" type="text" placeholder="Ingresa tu nombre" required onChange={handlerChange} />
            </div>
            <div>
                <label>Apellido:</label>
                <input name="lastname" type="text" placeholder="Ingresa tu apellido" required onChange={handlerChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input name="email" type="email" placeholder="Ingresa tu email" required onChange={handlerChange}/>
            </div>
            <div>
                <label> Confirmar email:</label>
                <input name="email2" type="email" placeholder="Confirma tu email" required pattern={formValues.email} title="El email introducido no coincide." />
            </div>
            <button type="submit">Finalizar la compra</button>
        </form>
    </>
  )
}
