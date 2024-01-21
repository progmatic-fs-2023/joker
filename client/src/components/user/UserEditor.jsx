import { useState, useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import UserPage from '../../pages/UserPage';
import FormSelector from '../micro/FormSelector';
import BlockButton from '../micro/BlockButton';
import { API_URL } from '../../constants';

function UserEditor() {
  const { data } = useFetch(`${API_URL}/users`);
  const [usersList, setUsersList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(false);
  const selectedOption = useRef({
    id: null,
    email: null,
  });

  useEffect(() => {
    setUsersList(data);
    // console.log('useEffect usersList:', usersList)
  }, [data]);

  const handleSelectOption = (e) => {
    selectedOption.current.email = e.target.value;
  };

  const handleUserOptionChoice = () => {
    // setSelectedUser(false)

    const filteredUser = usersList.filter((user) => user.email === selectedOption.current.email);
    selectedOption.current.id = filteredUser[0]?.id;
    setSelectedUser(filteredUser);
    // console.log('filtered user', selectedOption.current)
    // console.log('selectedUser userObject', selectedUser)
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
      {selectedUser && <UserPage user={selectedUser[0]} />}
    </div>
  );
}

export default UserEditor;
