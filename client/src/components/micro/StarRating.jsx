import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function StarRating({ rating, setRating }) {
  return (
    <Form.Group>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        const uniqueId = `star-rating-${ratingValue}`;
        return (
          <div key={uniqueId} className="d-inline">
            <Form.Check
              type="radio"
              id={uniqueId}
              name="rating"
              value={ratingValue}
              style={{ display: 'none' }}
              onChange={() => setRating && setRating(ratingValue)}
            />
            <Form.Check.Label htmlFor={uniqueId}>
              <FaStar
                size={30}
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                onClick={() => setRating && setRating(ratingValue)}
              />
            </Form.Check.Label>
          </div>
        );
      })}
    </Form.Group>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default StarRating;
