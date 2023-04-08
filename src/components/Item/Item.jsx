import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Item.css'

export const Item = ({id, description, price, image}) => {
    return (
        <div className='item'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Title>{description}</Card.Title>
                <Card.Title>{price}</Card.Title>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
        </div>
    );
}
