import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function DeleteUser({ usersList, handleUserDelete }) {
  return (
    <div className="mx-auto text-center p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>userId</th>
            <th>Felh.név</th>
            <th>Vezetéknév</th>
            <th>Keresztnév</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.map((user, indx) => (
              <tr key={uniqueKeyGenerator()}>
                <td>{indx + 1}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>
                  <Button
                    disabled={user.role === 'SUPERADMIN'}
                    type="button"
                    variant="danger"
                    onClick={() => handleUserDelete(user.id)}
                  >
                    Törlés
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

DeleteUser.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.shape({})),
  handleUserDelete: PropTypes.func,
};

DeleteUser.defaultProps = {
  usersList: undefined,
  handleUserDelete: undefined,
};
export default DeleteUser;
