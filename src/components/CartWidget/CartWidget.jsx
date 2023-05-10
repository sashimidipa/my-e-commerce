import React, { useContext } from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { CartContext } from '../context/CartContext';



export const CartWidget = () => {


    const {calcularCantidad} = useContext(CartContext)


    return (
        <>
            <ShoppingCartTwoToneIcon/>
            <span>{calcularCantidad()}</span>
        </>
    )
}
