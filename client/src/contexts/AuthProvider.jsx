import { createContext, useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AUTH_URL } from '../constants';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const USER_ROLES = ['BASIC', 'ADMIN', 'SUPERADMIN'];
  const ADMIN_ROLES = ['ADMIN', 'SUPERADMIN'];
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const timer = useRef('');
  const isLoggedIn = useRef(false);

  // useEffect(() => {
  //   const fetchRefreshTokenOptions = {
  //     method: 'GET',
  //     // TODO verify the user trough middleware
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${auth.accessToken}`,
  //       user: `${auth.userId}`,
  //     },
  //     credentials: 'include',
  //   };
  //   const refreshIntervalId = setInterval(async () => {
  //     const refresh = await fetch(`${AUTH_URL}/refresh`, fetchRefreshTokenOptions);
  //     const token = await refresh.json()
  //     // const newAccessToken = token?.accessToken;
  //     setAuth({ ...auth, accessToken: token?.accessToken });
  //     // console.log('new accessToken:', token?.accessToken)
  //   }, 10000);
  //   console.log('got new accessToken:', auth.accessToken)
  //   timer.current = refreshIntervalId
  // }, [isLoggedIn])

  const handleLogout = async () => {
    setAuth({});
    try {
      const fetchOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      };
      await fetch(`${AUTH_URL}/logout`, fetchOptions);
      clearInterval(timer.current);
      navigate('/logout');
      // this return is only because the linter
      return null;
    } catch (err) {
      // TODO catch error handling
      return null;
    } finally {
      // TODO could be different navigate to /logout or /error page
      navigate('/');
    }
  };

  const authMemo = useMemo(
    () => ({ USER_ROLES, ADMIN_ROLES, auth, setAuth, handleLogout, isLoggedIn }),
    [USER_ROLES, ADMIN_ROLES, auth, setAuth, handleLogout, isLoggedIn],
  );

  return <AuthContext.Provider value={authMemo}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
