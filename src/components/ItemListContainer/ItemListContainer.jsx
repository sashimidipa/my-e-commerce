import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


  useEffect(() =>{
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId)  )
        }else{
          setItems(res)
        }
      })
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoryId])




  return (
    <>
      {
        loading
        ?<div className='spinner'><Spinner/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}