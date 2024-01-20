import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';

function ProtectedLayout() {
  const { auth } = useAuth();

  return (
    <main className="dash-layout">
      {auth?.accessToken ? (
        <>
          <DashHeader />
          <Outlet />
          <DashFooter />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
}

export default ProtectedLayout;
