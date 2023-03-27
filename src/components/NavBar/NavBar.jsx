import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <h3>Ecomerce</h3>
                <div>
                    <button>Cat 1</button>
                    <button>Cat 2</button>
                    <button>Cat 3</button>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
}
