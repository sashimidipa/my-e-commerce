import React from 'react';
import './Item.css'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Item = ({id, description, price, image, category}) => {
  return (
  <div className='item'>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver mas detelles</Button>
          </Link>
      </Card.Body>
    </Card>
  </div>
    
  )
}

