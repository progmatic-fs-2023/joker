import { useState, useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
// import UserPage from '../../pages/UserPage';
import FormSelector from '../micro/FormSelector';
import BlockButton from '../micro/BlockButton';
import { API_URL } from '../../constants';
import ActionSelector from './ActionSelector';
import AlertInfo from '../micro/AlertInfo';
import NewUser from './NewUser';
import DeleteUser from './DeleteUser';
import UserEditorForm from './UserEditorForm';

function UserEditor() {
  const { data } = useFetch(`${API_URL}/users`);
  const [usersList, setUsersList] = useState([]);
  const [actionValue, setActionValue] = useState('1');
  const [selectedOptionState, setSelectedOptionState] = useState('');
  const [selectedUser, setSelectedUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    error: '',
    variant: 'info',
  });
  const selectedOption = useRef({
    id: null,
    email: null,
  });

  useEffect(() => {
    setUsersList(data);
  }, [data]);

  const fetchUsersList = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      setAlertInfo({
        show: true,
        message: `Nem sikerült az adatok frissítése: ${response.status}`,
        variant: 'danger',
      });
      throw new Error(`Couldn't fetch update data, status: ${response.status}`);
    }
    const responseData = await response.json();
    setUsersList([...responseData]);
  };

  const handleSelectOption = async (e) => {
    selectedOption.current.email = e.target.value;
    const filteredUser = usersList.filter((user) => user.email === selectedOption.current.email);
    selectedOption.current.id = filteredUser[0]?.id;
    setSelectedOptionState(selectedOption.current.email);
    setShowForm(false);
  };

  const handleUserOptionChoice = async () => {
    const response = await fetch(`${API_URL}/users/${selectedOption.current.id}`);
    const user = await response.json();
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleSubmit = async (e, currentUser) => {
    e.preventDefault();
    const fetchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...currentUser }),
    };
    const response = await fetch(`${API_URL}/users/${selectedUser.id}`, fetchOptions);
    if (!response) {
      setAlertInfo({
        show: true,
        message: 'Nem sikerült elmenteni az adatokat!',
        variant: 'danger',
      });
    } else {
      // TODO error handling with red alert! empty the inputs
      setAlertInfo({
        show: true,
        message: 'Adatok elmentve!',
        variant: 'success',
      });
      await response.json();
      setShowForm(false);
      setSelectedOptionState('');
    }
  };

  const handleUserDelete = async (userId) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`${API_URL}/users/${userId}`, fetchOptions);
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
        message: `A felhasználói fiók ${deletedUser.email} törölve!`,
        variant: 'danger',
      });
      fetchUsersList();
    }
  };

  return (
    <div
      id="user-editor-panel"
      className="py-5 my-2 mx-auto"
      style={{
        opacity: '90%',
        maxWidth: '55%',
        color: 'whitesmoke',
        backgroundColor: '#212529',
        borderRadius: '8px',
      }}
    >
      <h1 className="text-center">Felhasználók</h1>

      <ActionSelector actionValue={actionValue} setActionValue={setActionValue} />

      {alertInfo.show && <AlertInfo alertInfo={alertInfo} setAlertInfo={setAlertInfo} />}

      {usersList && actionValue === '1' ? (
        <div className="text-center mx-auto my-3" style={{ maxWidth: '90%', margin: 'mx-auto' }}>
          <FormSelector
            size="md"
            options={usersList}
            handleSelectOption={handleSelectOption}
            selectedOption={selectedOption}
            selectedOptionState={selectedOptionState}
          />
          <BlockButton
            classNames="m-3"
            size="md"
            variant="primary"
            type="button"
            btnName="Felhasználó szerkesztése"
            onClick={() => handleUserOptionChoice()}
          />
        </div>
      ) : null}

      {selectedUser && actionValue === '2' ? <NewUser /> : null}

      {usersList && actionValue === '3' && (
        <DeleteUser
          usersList={usersList}
          setUsersList={setUsersList}
          handleUserDelete={handleUserDelete}
        />
      )}
      {/* {showForm && selectedUser && actionValue === '1' ? <UserEditorForm user={selectedUser} setAlertInfo={setAlertInfo} fetchUsersList={fetchUsersList} handleUserDelete={handleUserDelete} handleUserCreate={handleUserCreate} handleSubmit={handleSubmit} /> : null} */}
      {showForm && selectedUser && actionValue === '1' ? (
        <UserEditorForm
          user={selectedUser}
          handleUserDelete={handleUserDelete}
          handleSubmit={handleSubmit}
        />
      ) : null}
    </div>
  );
}

export default UserEditor;
