import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteEvent }) => {
  return (
    <Card style={{ width: '18rem' }}>
      {image.urls.small && <Card.Img variant="top" src={image.urls.small} />}
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Card.Text>
          Created by: {`${image.user.first_name} ${image.user.last_name}`}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteEvent(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
