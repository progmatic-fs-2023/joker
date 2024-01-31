import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserEditorForm from './UserEditorForm';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants';
import AlertInfo from '../micro/AlertInfo';

function User() {
  const { auth, handleLogout } = useAuth();
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    error: '',
    variant: 'info',
  });
  const { data: user } = useFetch(`${API_URL}/users/${auth.userId}`, {}, alertInfo.show);

  const navigate = useNavigate();

  const handleSubmit = async (e, currentUser) => {
    e.preventDefault();
    const fetchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...currentUser }),
    };
    const response = await fetch(`${API_URL}/users/${currentUser.id}`, fetchOptions);
    if (!response) {
      // TODO error handling with red alert! empty the inputs
      setAlertInfo({
        show: true,
        message: `Nem sikerült elmenteni az adatokat:!`,
        variant: 'danger',
      });
    } else {
      const modifiedUser = await response.json();
      setAlertInfo({
        show: true,
        message: `Új adatok elmentve: ${modifiedUser.email}!`,
        variant: 'success',
      });
    }
  };

  const handleUserDelete = async (currentSignedInUser) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`${API_URL}/users/${currentSignedInUser}`, fetchOptions);
    if (response.name === 'PrismaClientKnownRequestError') {
      // TODO error handling with red alert! empty the inputs
      setAlertInfo({
        show: true,
        message: `Nem sikerült a felhasználói fiók törlése!`,
        variant: 'danger',
      });
    } else {
      const deletedUser = await response.json();
      setAlertInfo({
        show: true,
        message: `A felhasználói fiók ${deletedUser.email} törölve! Most kiléptetünk!`,
        variant: 'danger',
      });
      handleLogout();
      setTimeout(navigate('/login'), 10000);
    }
  };

  return (
    <>
      {alertInfo.show && <AlertInfo alertInfo={alertInfo} setAlertInfo={setAlertInfo} />}
      {user && !alertInfo.show && (
        <UserEditorForm
          user={user}
          handleSubmit={handleSubmit}
          handleUserDelete={handleUserDelete}
        />
      )}
    </>
  );
}

export default User;
