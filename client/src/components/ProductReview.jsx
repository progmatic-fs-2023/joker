import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarRating from './micro/StarRating';

function ProductReview() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setReview('');
    setRating(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Értékelés</Form.Label>
        <StarRating rating={rating} setRating={setRating} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Komment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Beküldés
      </Button>
    </Form>
  );
}

export default ProductReview;
