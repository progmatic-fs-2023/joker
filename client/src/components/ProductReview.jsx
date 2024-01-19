import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarRating from './micro/StarRating';

import { API_URL } from '../constants';

function ProductReview({ herbID, userId, onFeedbackPosted }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${API_URL}/herbs/feedback/${herbID}`, {
      method: 'POST',
      credentials: 'include',

      headers: {
        'Content-Type': 'application/json',
        user: userId,
      },
      body: JSON.stringify({
        title,
        body,
        herbID,
        rating,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Hiba történt a kérés során.');
    }

    if (response.ok) {
      setTitle('');
      setBody('');
      setRating(0);
      onFeedbackPosted();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Cím</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Komment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Értékelés</Form.Label>
        <StarRating rating={rating} setRating={setRating} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Értékelés mentése
      </Button>
    </Form>
  );
}

ProductReview.propTypes = {
  herbID: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onFeedbackPosted: PropTypes.func.isRequired,
};

export default ProductReview;
