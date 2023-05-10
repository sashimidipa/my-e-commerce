import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './CartScreen.css'



export const CartScreen = () => {

    const {vaciarCarrito , carrito, precioTotal, removerItem} = useContext(CartContext)


    return (
        <div className='container'>
            {
                carrito.length === 0 ? 
                <>
                <h3>Carrito vacio</h3>
                <Link to='/'className='btn btn-success'>Volver a comprar</Link>
                </> : <>
                <h3>Resumen de compras</h3>
                <hr />
                </>
            }
        {
            carrito.map((prod) =>(
                <>
                <div className='listado'>
                <p>Producto: {prod.description}</p>
                <p>${prod.price}</p>
                <p>cantidad: {prod.counter}</p>
                </div>
                <Button onClick={() => removerItem(prod.id)}>
                delette
                </Button>
                </>
            ))
            }
            <hr />
            <strong>Precio total: $ {precioTotal()}</strong>
            <Button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar carrito</Button>
            <hr />
            </div>
        )
    }