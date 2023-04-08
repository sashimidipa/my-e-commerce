import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css';

export const ItemListContainer = ({greating}) => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)


    useEffect(() =>{
        setLoading(true)
        pedirProductos()
        .then((res) =>{
        
        setItems(res)
        })
        .catch((error) => console.log(error))
        .finally(() =>{setLoading(false)})
    }, [])




    return (
        <>
            {
                loading
                ?<div className='spinner'><Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
                :<ItemList productos={items}/>
            }
        </>
    )}