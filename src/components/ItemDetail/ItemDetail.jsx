import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { ItemCounter } from '../ItemCounter/ItemCounter';

export const ItemDetail = ({id, description, price, image, category}) => {
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
        <ItemCounter/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  </div>
  )
}