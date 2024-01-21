import UserPage from '../../pages/UserPage';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants';

function User() {
  const { auth } = useAuth();
  const { data: user } = useFetch(`${API_URL}/users/${auth.userId}`);
  // TODO handle errors if fetch fails
  return user && <UserPage user={user} />;
}

export default User;
