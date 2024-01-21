import DashNav from './DashNav';
import useAuth from '../../hooks/useAuth';

function DashHeader() {
  const { auth } = useAuth();
  return (
    <div className="dash-header text-center mx-3 my-1">
      {auth.role && ['SUPERADMIN', 'ADMIN'].includes(auth.role) ? <DashNav /> : null}
    </div>
  );
}

export default DashHeader;
