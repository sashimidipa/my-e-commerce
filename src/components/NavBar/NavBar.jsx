import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            <Link to="/">Inicio</Link>
            <Link to='/productos/electrodomestico'>Electrodomesticos</Link>
            <Link to='/productos/ropa'>Ropa</Link>
            <Link to='/cart'><CartWidget/></Link>
        </div>
    )
}
