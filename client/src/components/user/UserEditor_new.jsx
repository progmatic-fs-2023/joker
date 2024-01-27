import { useState, useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import UserPage from '../../pages/UserPage';
import FormSelector from '../micro/FormSelector';
import BlockButton from '../micro/BlockButton';
import { API_URL } from '../../constants';

function UserEditor() {
  const { data: users } = useFetch(`${API_URL}/users`);
  const [usersList, setUsersList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  // const [currentUser, setCurrentUser] = useState({});
  // const [showAlert, setShowAlert] = useState(false);
  const selectedOption = useRef({
    id: null,
    email: null,
  });

  const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch update data, status: ${response.status}`);
    }
    const responseData = await response.json();
    // console.log('users reFetched!');
    setUsersList([...responseData]);
  };

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleSelectOption = (e) => {
    selectedOption.current.email = e.target.value;
  };

  const handleUserOptionChoice = () => {
    const filteredUser = usersList.filter((user) => user.email === selectedOption.current.email);
    selectedOption.current.id = filteredUser[0]?.id;
    setSelectedUser(filteredUser[0]);
    setShowList(true);
  };

  return (
    <div style={{ margin: 'auto' }}>
      <h1 className="text-center" style={{ color: 'lightblue' }}>
        Users List
      </h1>
      {usersList && (
        <div style={{ maxWidth: '50%', margin: 'auto' }}>
          <FormSelector size="md" options={usersList} handleSelectOption={handleSelectOption} />
          <BlockButton
            classNames="m-3"
            size="md"
            variant="outline-warning"
            type="button"
            btnName="Felhasználó szerkesztése"
            onClick={() => handleUserOptionChoice(selectedOption.current)}
          />
        </div>
      )}
      {showList && (
        <UserPage
          selectedUser={selectedUser}
          fetchUsers={fetchUsers}
          setShowList={setShowList}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}

export default UserEditor;
