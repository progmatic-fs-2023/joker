import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ConfirmModal from './micro/ConfirmModal';
import StarRating from './micro/StarRating';
import { API_URL } from '../constants';

function FeedbackList({ feedback, userId, onFeedbackUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editRating, setEditRating] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditBody(item.body);
    setEditRating(item.rating);
  };

  const saveEdit = async () => {
    const response = await fetch(`${API_URL}/herbs/feedback/${editingId}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        user: userId,
      },
      body: JSON.stringify({
        title: editTitle,
        body: editBody,
        rating: editRating,
      }),
    });

    if (response.ok) {
      const updatedFeedback = await response.json();
      onFeedbackUpdate(editingId, updatedFeedback);
      setEditingId(null);
    }
  };

  const onDeleteFeedback = async (feedbackId) => {
    const response = await fetch(`${API_URL}/herbs/feedback/${feedbackId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        user: userId,
      },
    });

    if (response.ok) {
      onFeedbackUpdate(feedbackId, null);
    }
  };

  const handleDeleteFeedback = (feedbackId) => {
    setFeedbackToDelete(feedbackId);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    if (feedbackToDelete) {
      await onDeleteFeedback(feedbackToDelete);
    }
    setShowConfirmModal(false);
    setFeedbackToDelete(null);
  };

  return (
    <div>
      {feedback.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            {editingId === item.id ? (
              <div>
                <Form.Control
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                />
                <StarRating rating={editRating} setRating={setEditRating} />
                <Button variant="success" size="sm" onClick={saveEdit}>
                  Mentés
                </Button>
              </div>
            ) : (
              <>
                <div className="d-flex justify-content-between">
                  <h6>{item.title}</h6>
                  <small>{new Date(item.createdAt).toLocaleDateString()}</small>
                  <small>{item.authorUser.name || item.authorUser.email}</small>
                </div>
                <p>{item.body}</p>
                <StarRating rating={item.rating} />
                {userId === item.authorID && (
                  <div className="d-flex justify-content-end">
                    <Button variant="outline-primary" size="sm" onClick={() => startEditing(item)}>
                      Szerkeszt
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDeleteFeedback(item.id)}
                    >
                      Töröl
                    </Button>
                  </div>
                )}
              </>
            )}
          </Card.Body>
        </Card>
      ))}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
        title="Visszajelzés törlése"
        body="Biztosan törölni szeretné ezt a visszajelzést?"
      />
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
  userId: PropTypes.string.isRequired,
  onFeedbackUpdate: PropTypes.func.isRequired,
};

export default FeedbackList;
