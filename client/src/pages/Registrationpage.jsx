import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

function Registrationpage() {
  const [isRegistering, setIsRegistering] = useState(true);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const registerUser = async (formData) => {
  //   // majd helyettesítve lesz a konkrét api hívással
  //   const response = await fetch('/api/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (!response.ok) {
  //     throw new Error('Registration failed');
  //   }

  //   return response.json();
  // };

  // const handleRegister = async (formData) => {
  //   try {
  //     const updatedFormData = { ...formData, firstName, lastName };

  //     // majd az elkészülő registerUser elvégzi az API hívást
  //     const response = await registerUser(updatedFormData);

  //     // Sikeres regisztráció kezelése
  //     console.log('Registration Successful:', response);
  //   } catch (error) {
  //     // Hiba esetén error message
  //     console.error('Registration Failed:', error);
  //   }
  // };

  // const handleSignIn = (formData) => {
  //   // Bejelentkezés implementációja ide
  //   console.log('Sign In:', formData);
  // };
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {isRegistering ? (
        <>
          <AuthForm
            type="register"
            // onSubmit={handleRegister}
            // setFirstName={setFirstName}
            // setLastName={setLastName}
          />
          <p>
            Már van fiókja?{' '}
            <span
              onClick={toggleForm}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toggleForm();
                }
              }}
              role="button"
              tabIndex={0} // This makes the element focusable
            >
              Belépés
            </span>
          </p>
        </>
      ) : (
        <>
          <AuthForm
            type="signin"
            // onSubmit={handleSignIn}
          />
          <p>
            Új vásárló?{' '}
            <span
              onClick={toggleForm}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toggleForm();
                }
              }}
              role="button"
              tabIndex={0} // This makes the element focusable
            >
              Hozz létre egy új fiókot
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Registrationpage;
