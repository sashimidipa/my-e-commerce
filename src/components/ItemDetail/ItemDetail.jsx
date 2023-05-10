import React,{useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({id, description, price, image, category, stock}) => {
  
  
  const navigate = useNavigate();


  const volverHaciaAtras = ()=> {
    navigate(-1)
  }

  const [counter, setCounter] = useState(0)
  
  const sumarAlCarrito = ()=> {
    const newItem ={
      id,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem);
    addToCart(newItem)
  }

    const {addToCart} = useContext(CartContext)

  return (
  <div className='item'>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo autem deleniti vero at! Consequatur magnam, fugit sit officia repudiandae non, tenetur repellendus architecto commodi iure alias tempore ea ullam nemo.</p>
        <Card.Title>Categoria: {category}</Card.Title>
        <ItemCounter max={stock} modify={setCounter} cantidad={counter} />
        <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        <Button onClick={volverHaciaAtras} className='btn btn-succes'>
        Volver Atras</Button>
      </Card.Body>
    </Card>
  </div>
  )
}