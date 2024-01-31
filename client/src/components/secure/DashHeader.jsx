import DashNav from './DashNav';
import useAuth from '../../hooks/useAuth';

function DashHeader() {
  const { ADMIN_ROLES, auth } = useAuth();
  return (
    <div
      className="dash-header text-center px-3 py-2"
      style={{ backgroundColor: '#C4D6CD', opacity: '90%' }}
    >
      {auth.role && ADMIN_ROLES.includes(auth.role) ? <DashNav /> : null}
    </div>
  );
}

export default DashHeader;
