import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserListCard({ user }) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Header>{user.email}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Név: {user.firstName} {user.lastName}
        </ListGroup.Item>
        <ListGroup.Item>Role: {user.role}</ListGroup.Item>
        <ListGroup.Item>Reg.dátum: {user.createdAt}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

UserListCard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

UserListCard.defaultProps = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default UserListCard;
