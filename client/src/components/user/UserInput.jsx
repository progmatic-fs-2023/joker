import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function UserInput({ onCreate }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    if (event.target.type === 'text') {
      setInputEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setInputPwd(event.target.value);
    } else {
      // TODO handle else statement
      // console.log(event.target.type);
      return null;
    }
    return null;
  };

  return (
    <div>
      <input type="text" placeholder="email..." onChange={handleInputChange} value={inputEmail} />
      <input
        type="password"
        placeholder="jelszó..."
        onChange={handleInputChange}
        value={inputPwd}
      />
      <Button
        variant="success"
        type="button"
        onClick={() => {
          if (inputEmail === '' || inputPwd === '') {
            setErrorMessage('Az input nem maradhat üresen!');
          } else {
            onCreate(inputEmail, inputPwd);
            setInputEmail('');
            setInputPwd('');
            if (errorMessage !== '') {
              setErrorMessage('');
            }
          }
        }}
      >
        Felhasználó létrehozása
      </Button>
      {errorMessage !== '' && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

UserInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default UserInput;
