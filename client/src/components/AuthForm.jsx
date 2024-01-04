import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AuthForm({ type, onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, password });
  };

  return (
    <form
      className="bg-emerald-400/10 py-5 pl-55 pr-5 flex flex-col h-full w-3/4 max-w-full items-start"
      onSubmit={handleSubmit}
    >
      <h3 className="p-10 text-center text-2xl">
        {type === 'register' ? 'Regisztráció' : 'Bejelentkezés'}
      </h3>

      {type === 'register' && (
        <>
          <label className="flex flex-col" htmlFor="first-name">
            Keresztnév:
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col" htmlFor="last-name">
            Vezetéknév:
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </>
      )}
      <label className=" flex flex-col" htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className=" flex flex-col" htmlFor="password">
        Jelszó:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">{type === 'register' ? 'Regisztráció' : 'Bejelentkezés'}</button>
    </form>
  );
}
AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['register', 'signin']).isRequired,
};

export default AuthForm;
