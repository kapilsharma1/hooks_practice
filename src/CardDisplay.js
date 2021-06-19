import React,{Fragment, useState} from 'react';
import {Card,Form,FormControl,Button} from 'react-bootstrap';

function CardDisplay(props)
{
    return (
        <>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Name of movie</Card.Title>
    <Card.Text>
      {props.name}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Year of movie</Card.Title>
    <Card.Text>
      {props.year}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Budget of movie</Card.Title>
    <Card.Text>
      {props.budget}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>

    )
}

export default CardDisplay;